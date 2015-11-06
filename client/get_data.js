function keyFromLink(path) {
    var s = (path).match(/\d{5,6}/);
    return (s ? s[0] : false);
}

function getIds(url) {
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
}

function getText(key) {
    var url = `https://www.polizei.bayern.de/bepo/news/presse/aktuell/index.html/${key}`;
    Meteor.call('getHTML', url, function (err, content) {
        var parser = new DOMParser(),
            doc = parser.parseFromString(content, 'text/html'),
            headline = doc.querySelector('td.inhaltZelle h1'),
            elements = doc.querySelectorAll('td.inhaltZelle .inhaltText'),
            textArray = _.map(elements, (element)=> {
                return element.innerText;
            });
        if (headline == null) {
            headline = '';
        } else {
            headline = headline.innerText;
        }
        Reports.insert({
            key: key,
            headline: headline,
            text: textArray.join(' ')
        });
    });
}

Template.index.events({
    'click button': function () {
        Meteor.call('empty', function () {
            var max = 300;
            for (var i = 0; i <= max - 10; i += 10) {
                getIds(`https://www.polizei.bayern.de/bepo/news/presse/archiv/index.html?type=archiv&rubid=rub-4&query=&submit=Suchen%21&periodselect=All&period=fromto&periodfrom=01.10.2014&periodto=31.10.2015&start=${i}`);
            }
        });
    }
});