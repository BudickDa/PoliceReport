var w2vModel = new W2V.Model();
Meteor.startup(function () {
    w2vModel.readTxtFile(Tentacula.pathToVectorPath());
});

Meteor.methods({
    empty: function () {
        Reports.remove({});
    },
    getText: function (url) {
        Tentacula.scrapLinks(url, '.inhaltFooterText a', function (links) {
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

                if (typeof element.dateAndStation === 'string') {
                    var station = '', date = '',
                        dateAndStationArray = element.dateAndStation.split(', PP ');
                    if (dateAndStationArray.length === 2) {
                        date = moment(dateAndStationArray[0], 'DD.MM.YYYY').toISOString();
                        station = dateAndStationArray[1];
                    }
                }

                /**
                 * Location are the first words and they are uppercase
                 *
                 * WÜRZBURG / INNENSTADT.
                 *
                 * if a report has no location it is not interresting and will not be stored into database.
                 */
                var location = element.text.split('.')[0];
                if (location !== location.toUpperCase()) {
                    location = false;
                }
                Reports.insert({
                    url: link,
                    headline: element.headline,
                    text: element.text,
                    location: location,
                    station: station,
                    timestamp: date,
                    processed: 'False',
                    tags: []
                });
            });
        });
    },
    tagData: function () {
        if (w2vModel.loaded) {
            var wordVectors = w2vModel.getVectors(['Unterfranken', 'Polizeistation', 'Polizeiinspektion']);
            var result = wordVectors[0].subtract(wordVectors[1]).add(wordVectors[2]);
            console.log(w2vModel.getNearestWords(result, 10));
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
    learn: function () {
        /*
         var text = '';
         Reports.find().forEach((doc)=> {
         var date = moment(doc.date).format('DD.MM.YYYY');
         text += `${doc.headline}
         Polizeistation: ${doc.station}, Datum: ${date},
         ${doc.text} `;
         });
         Tentacula.learnFromText(text, function(code){
         console.log(`Word2Vector finished with code: ${code}`);
         });*/
    }
});