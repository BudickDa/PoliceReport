if (Meteor.isServer) {
    var w2vModel = new W2V.Model();
    Meteor.startup(function () {
        w2vModel.readTxtFile('D:\\vector-1.txt');
    });
}

crimes = [
    'Nötigung',
    'Geldfälschung',
    'Meineid',
    'Mord',
    'Todschlag',
    'Körperverletzung',
    'Menschenraub',
    'Verschleppung',
    'Geiselnahme',
    'Bandendiebstahl',
    'Raub',
    'Diebstahl',
    'Erpressung',
    'Bandenhehlerei',
    'Brandstiftung',
    'Rechtsbeugung',
    'Aussageerpressung',
    'Vergewaltigung',
    'Exhibitionismus',
    'Verkehrsunfall'
];


function cityExists(cityname) {
    return Cities.find({city: cityname}, {limit: 1}).count() > 0;
}


Meteor.methods({
    empty: function () {
        Reports.remove({});
    },
    saveNameEntityRecognition: function () {
        if (Meteor.isServer) {
            Reports.find({processed: {$ne: 'Categorised'}}).forEach((doc)=> {
                Reports.update(doc._id, {$set: {processed: 'In progress'}});
                var category = Tentacula.nameEntityRecognition(doc.headline, crimes);
                if (category) {
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
    getText: function (url) {
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
                                    processed: 'False',
                                    location_detail: location_detail,
                                    category: ''
                                });
                            }
                        }
                    });
                }
            );
        }
    },
    word2vec: function () {


        if (w2vModel.loaded) {
            /*
             var vector = w2vModel.similarity('Berlin', 'Deutschland');
             console.log('Berlin <=> Deutschland', vector);

             vector = w2vModel.similarity('Berlin', 'München');
             console.log('Berlin <=> München', vector);

             vector = w2vModel.similarity('Berlin', 'Käse');
             console.log('Berlin <=> Käse', vector);


             var getNearestWord = w2vModel.getNearestWord('Einbruch');
             console.log('Nearest word of Einbruch: ', getNearestWord);

             */
            var getNearestWords = w2vModel.getNearestWords('Brandstiftung', 20);
            console.log('Nearest 20 words of Brandstiftung: ', getNearestWords);


            /*var synonyms = w2vModel.mostSimilar(`WÜRZBURG. Am Montagnachmittag kam es in einem Unterkunftsgebäude zu einem Zimmerbrand. Zwei Bewohner mussten mit leichter Rauchgasvergiftung ambulant behandelt werden. Bedingt durch eine zeitweise Vollsperrung der Grombühlstraße kam es im Feierabendverkehr zu Verkehrsbehinderungen. Die Kripo hat die Ermittlungen zur genauen Brandursache aufgenommen. Passanten hatten gegen 16:30 Uhr schwarze Rauchschwaden entdeckt, die dem zweiten Stock eines Wohngebäudes quollen. Nach der Alarmierung der Rettungskräfte war die Berufsfeuerwehr mit etwa 50 Einsatzkräften schnell vor Ort und begann mit den Löscharbeiten. Die Bewohner des Hauses wurden ins Freie geführt und der Brand in einem Zimmer war dann innerhalb weniger Minuten unter Kontrolle. Durch den Einsatz, bei dem auch ein Feuerwehrfahrzeug mit Drehleiter auf der Fahrbahn aufgebaut war, musste die Grombühlstraße zeitweise komplett gesperrt werden. Dies sorgte im Berufsverkehr für entsprechende Behinderungen. Zwei Bewohner im Alter von 66 und 38 Jahren kamen in ein Würzburger Krankenhaus. Sie erlitten leichte Rauchgasvergiftungen und wurden ambulant behandelt. Der Sachschaden wird auf 10.000 Euro geschätzt. Warum der Brand ausgebrochen ist, steht derzeit noch nicht genau fest und ist jetzt Gegenstand der Ermittlungen der Kripo Würzburg. Vor Ort konnten erste Hinweise erlangt werden, dass möglicherweise das Feuer an einem Fernsehgerät seinen Ursprung fand. Genauere Untersuchungen stehen hierzu noch aus.`, 20);
             console.log(synonyms);*/
        } else {
            console.log('Model has not been loaded yet.');
            console.log(`${w2vModel.vocabular.length} / 34119`);
        }


        /*
         Reports.find().forEach((doc)=> {
         Reports.update(doc._id, {$set: {processed: 'In Progress'}});
         var tags = Tentacula.tagText(doc.headline, doc.text, Tags);
         Reports.update(doc._id, {$push: {tags: tags}});
         Reports.update(doc._id, {$set: {processed: 'Tagged'}});
         });*/
    },

    createBagOfWords: function (text) {

    }
});