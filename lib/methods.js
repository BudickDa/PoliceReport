Meteor.methods({
    empty: function () {

        throw new Meteor.Error(402, 'Get text was deactivated, use the bson file or comment out line 45 in lib/methods.js');

        Reports.remove({});
    },
    reset: function (code) {
        if (Meteor.isServer) {
            if (code === authCode) {
                Reports.update({
                    processed: 'Categorised'
                }, {
                    $set: {
                        processed: 'Not categorised',
                        category: '',
                    }
                }, {multi: true});
            } else {
                throw new Meteor.Error(402, 'Wrong password');
            }
        }
    },
    saveNameEntityRecognition: function () {
        console.log('Fuzzy categorisation is running...');
        if (Meteor.isServer) {
            Reports.find().forEach((doc)=> {
                Reports.update(doc._id, {$set: {processed: 'In progress'}});
                var category = Tentacula.nameEntityRecognition(doc.headline, crimes);
                if (category && category.score > 1000) {
                    Reports.update(doc._id, {$set: {processed: 'Categorised', category: category}});
                    return;
                }

                category = Tentacula.nameEntityRecognition(doc.text, crimes);
                if (category && category.score > 10000) {
                    Reports.update(doc._id, {$set: {processed: 'Categorised', category: category}});
                    return;
                }
                Reports.update(doc._id, {$set: {processed: 'Not categorised'}});
            });
        }
    },
    synonymNameEntityRecognition: function () {
        console.log('Synonym categorisation is running...');
        if (Meteor.isServer) {
            Reports.find({processed: {$ne: 'Categorised'}}).forEach((doc)=> {
                Reports.update(doc._id, {$set: {processed: 'In progress'}});
                var category = Tentacula.synonymNameEntityRecognition(`${doc.headline} ${doc.text}`, crimes, synomnyms);
                if (category && category.score > 1000) {
                    Reports.update(doc._id, {$set: {processed: 'Categorised', category: category}});
                    return;
                }
                if (category) {
                    Reports.update(doc._id, {$set: {processed: 'Categorised - unsafe', category: category}});
                    return;
                }
                Reports.update(doc._id, {$set: {processed: 'Not categorised'}});
            });
        }
    },
    getText: function (url) {

        throw new Meteor.Error(402, 'Get text was deactivated, use the bson file or comment out line 45 in lib/methods.js');

        if (Meteor.isServer) {
            //no need to execute this on the client
            Tentacula.scrapLinks(url, '.inhaltFooterText a', function (links) {
                    if (links.length === 0) {
                        return true;
                    }
                    _.forEach(links, (link)=> {
                        var element = Tentacula.scrapContent(link, [
                            {
                                name: 'headline',
                                tag: '.inhaltUeberschriftFolgeseitenFettAbstand'
                            },
                            {
                                name: 'dateAndStation',
                                tag: '.inhaltTextDatum'
                            },
                            {
                                name: 'text',
                                tag: 'td.inhaltZelle .inhaltText',
                                multiple: true
                            }
                        ]);

                        /**
                         * Location are the first words and they are uppercase
                         *
                         * WÜRZBURG / INNENSTADT.
                         *
                         * if a report has no location it is not interresting and will not be stored into database.
                         */
                        var location = element.text.split('.')[0], text = element.text.split('.').slice(1);


                        if (typeof element.dateAndStation === 'string' && location === location.toUpperCase()) {
                            /**
                             * Get date and station for report
                             */
                            var station = '', date = '',
                                dateAndStationArray = element.dateAndStation.split(', PP ');
                            if (dateAndStationArray.length === 1) {
                                dateAndStationArray = element.dateAndStation.split(', ');
                            }
                            if (dateAndStationArray.length === 2) {
                                date = moment(dateAndStationArray[0], 'DD.MM.YYYY').toISOString();
                                station = dateAndStationArray[1];
                            }

                            /*
                             * Get PLZ
                             * */
                            var location_detail = false;
                            var cleanLocation = location.replace(/ /g, '').replace('\t', '').replace('\n', ''),
                                cityUpper = cleanLocation.split(',')[0],
                                fallback = false;
                            if (cityUpper.split('/').length > 1) {
                                fallback = cityUpper.split('/')[0];
                                cityUpper = cityUpper.split('/')[1];
                            }


                            var city = normalizeWord(cityUpper);

                            if (cityExists(city)) {
                                location_detail = Cities.findOne({city: normalizeWord(city)});
                            } else if (fallback) {
                                city = normalizeWord(fallback);
                                if (cityExists(city)) {
                                    location_detail = Cities.findOne({city: city});
                                }
                            }

                            if (location_detail) {
                                Reports.insert({
                                    url: link,
                                    headline: element.headline,
                                    text: element.text,
                                    station: station,
                                    timestamp: date,
                                    processed: 'Not categorised',
                                    location_detail: location_detail,
                                    category: '',
                                    bagOfWords: Tentacula.createBagOfWords(element.text)
                                });
                            }
                        }
                    });
                }
            );
        }
    },

    /**
     * This does not work, we need a better way to compare two bag of words.
     */
    bagOfWords: function () {
        console.log('Bag of words is running...');

        var fingerprints = {};
        if (Meteor.isServer) {
            /**
             * do nothing if everything is categorized
             */
            var uncategorised = Reports.find({processed: 'Not categorised'}).count();
            if (uncategorised === 0) {
                console.error('Already categorised');
                return;
            }

            _.forEach(crimes, function (category, index) {
                var fingerprint = {};
                Reports.find({
                    processed: 'Categorised',
                    'category.entity': category
                }, {fields: {'bagOfWords': 1, _id: 0}}).forEach((doc)=> {
                    _.forEach(doc.bagOfWords, (count, word)=> {
                        var found = false;
                        _.forEach(fingerprint, (printCount, printWord)=> {
                            if (printWord === word) {
                                found = true;
                                printCount += count;
                            }
                        });
                        if (!found) {
                            fingerprint[word] = count;
                        }
                    });
                });

                /**
                 * normalize fingerprint and store it
                 */
                fingerprint = shorten(fingerprint);
                fingerprints[category] = normalizeBagOfWords(fingerprint);
                console.log(`Fingerprint for ${category} created...`);
            });
            console.log(`Categorising...`);
            var i = 0;
            Reports.find({processed: 'Not categorised'}).forEach((doc)=> {
                i++;
                console.log(`${Math.floor((i / uncategorised) * 100)} %`);
                _.forEach(crimes, function (category, index) {
                    /**
                     * If last round change processed to 'Categorised'
                     */
                    if (index === crimes.length - 1) {
                        Reports.update(doc._id, {$set: {processed: 'Categorised'}});
                    } else {
                        Reports.update(doc._id, {$set: {processed: 'In progress'}});
                    }

                    var result = Tentacula.fuzzy.match(JSON.stringify(fingerprints[category]), JSON.stringify(doc.bagOfWords));
                    if (result) {
                        category = {
                            entity: category,
                            score: result.score
                        }
                        if (doc.category === '') {
                            Reports.update(doc._id, {$set: {category: category}});
                        }
                        else if (doc.category.score < result.score) {
                            Reports.update(doc._id, {$set: {category: category}});
                        }
                    }
                });
            });
        }
    }
});