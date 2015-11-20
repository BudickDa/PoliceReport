//algorithm to stem word
var stem = Npm.require('snowball-german');
var w2v = require('word2vec');

class TentaculaClass {
    /**
     * Tags a text with the possible tags. Returns the tags as array.
     * @param text {String}
     * @param tags {name: {String}, keywords: {Array}}
     * @returns {Array}
     */
    static tagText(headline, text, tags) {
        var result = [];
        tags.forEach((tag)=> {
            var found = false;
            tag.keywords.forEach((keyword)=> {
                if (found) {
                    return;
                }
                var stemmedKeyword = stem(keyword);
                if (headline.includes(stemmedKeyword)) {
                    found = true;
                } else if (text.includes(stemmedKeyword)) {
                    found = true;
                }
                if (found) {
                    result.push(tag.name);
                }
            });
        });
        return result;
    }
}
Tentacula = TentaculaClass;