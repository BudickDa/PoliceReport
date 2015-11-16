getIds = function(url) {
    Meteor.call('getHTML', url, function (err, content) {
        if(err){
            console.error(500, err);
            return;
        }
        var parser = new DOMParser(),
            doc = parser.parseFromString(content, 'text/html'),
            links = doc.querySelectorAll('.inhaltFooterText a'),
            key;
        if (links.length > 0) {
            _.forEach(links, (link) => {
                if (typeof link.outerHTML === 'string') {
                    key = keyFromLink(link.outerHTML);
                    if (key) {
                        getText(key);
                    }
                }
            });
        }
    });
};


function keyFromLink(path) {
    var s = (path).match(/\d{5,6}/);
    return (s ? s[0] : false);
}

function getText(key) {
    var url = `https://www.polizei.bayern.de/bepo/news/presse/aktuell/index.html/${key}`;
    Meteor.call('getHTML', url, function (err, content) {
        var parser = new DOMParser(),
            doc = parser.parseFromString(content, 'text/html'),
            headline = doc.querySelector('td.inhaltZelle h1'),
            dateAndStation = doc.querySelector('.inhaltTextDatum').innerText,
            elements = doc.querySelectorAll('td.inhaltZelle .inhaltText'),
            textArray = _.map(elements, (element)=> {
                return element.innerText;
            });
        if (headline == null) {
            headline = '';
        } else {
            headline = headline.innerText;
        }

        if(typeof dateAndStation === 'string'){
            var station = '', date = '',
            dateAndStationArray = dateAndStation.split(', PP ');
            if(dateAndStationArray.length===2){
                date = moment(dateAndStationArray[0], 'DD.MM.YYYY').toISOString();
                station = dateAndStationArray[1];
            }
        }
        Reports.insert({
            key: key,
            headline: headline,
            text: textArray.join(' '),
            station: station,
            date: date,
            processed: 'False',
            tags: []
        });
    });
}

