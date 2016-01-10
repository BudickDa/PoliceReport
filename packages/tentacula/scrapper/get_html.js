var $ = Npm.require('cheerio'),
    URL = Npm.require('url');

getLinks = function (url, tag, callback) {
    var content = getHTML(url),
        document = $.load(content),
        linksHtml = document(tag),
        links = [];
    if (linksHtml.length > 0) {
        _.forEach(linksHtml, (linkHtml)=> {
            if (linkHtml.attribs.href) {
                var linkRaw = linkHtml.attribs.href;
                links.push(URL.resolve(url, linkRaw));
            }
        });
    }
    return callback(links);
};

getContent = function (url, elements) {
    var content = getHTML(url),
        result = {},
        document = $.load(content);

    _.forEach(elements, (element)=> {
        if (typeof element.name === 'string' && typeof element.tag === 'string') {
            if (element.multiple) {
                var textArray = [];
                document(element.tag).each((i,elem)=> {
                    textArray.push($(elem).text());
                });
                result[element.name] = textArray.join(' ');
            } else {
                result[element.name] = document(element.tag).text();
            }
        } else {
            throw new Meteor.Error(500, 'Tentacula.scrapContent: element.name and element.tag have to be strings.')
        }
    });
    return result;
}


function getHTML(url) {
    var result = HTTP.get(url);
    if (result.statusCode === 404) {
        throw new Meteor.Error(404, result.content);
    }
    if (result.statusCode === 500) {
        throw new Meteor.Error(500, result.content);
    }
    return result.content;
}
