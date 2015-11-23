//algorithm to stem word
var stem = Npm.require('snowball-german');
var fs = Npm.require('fs');
var path = Npm.require('path');


class TentaculaClass {
    /**
     * Scrapping
     */
    static scrapLinks(url, tag, callback) {
        if (typeof url !== 'string') {
            throw new Meteor.Error(500, 'Parameter url in scrapLinks hat to be a string.');
        }
        if (typeof tag !== 'string') {
            throw new Meteor.Error(500, 'Parameter tag in scrapLinks hat to be a string.');
        }
        if (typeof callback !== 'function') {
            throw new Meteor.Error(500, 'Parameter callback in scrapLinks hat to be a function.');
        }
        getLinks(url, tag, callback);
    }

    /**
     *
     *
     * @param url
     * @param elements [{
     *  name: string,
     *  tag: string,
     *  multiple: Boolean
     * }]
     */

    static scrapContent(url, elements) {
        if (typeof url !== 'string') {
            throw new Meteor.Error(500, 'Tentacula.scrapContent: Parameter url in scrapLinks hat to be a string.');
        }
        if (!Array.isArray(elements)) {
            throw new Meteor.Error(500, 'Tentacula.scrapContent: Parameter url in scrapLinks hat to be a string.');
        }
        return getContent(url, elements);
    }


    /**
     * Tags a text with the possible tags. Returns the tags as array.
     * @param text {String}
     * @param tags {name: {String}, keywords: {Array}}
     * @returns {Array}
     */
    static tagText(headline, text, tags) {
        var result = [];

        /*tags.forEach((tag)=> {
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
         });*/
        return result;
    }

    static learnFromText(text, callback) {
        var dir = path.dirname('/w2v/');
        var inputPath = path.join(dir, 'input.txt');
        //write text to file:
        fs.closeSync(fs.openSync(inputPath, 'w'));
        fs.writeFileSync(inputPath, text);


        if (!params) {
            params = {};
        }

        var vectorPath = path.join(dir, 'vector-1.txt');
        fs.closeSync(fs.openSync(vectorPath, 'w'));
        W2V.word2vec(inputPath, vectorPath, callback);
    }

    static pathToVectorPath() {
        var dir = path.dirname('/w2v/'),
            vectorPath = path.join(dir, 'vector-1.txt');
        return vectorPath;
    }
}
W2V = {};
Tentacula = TentaculaClass;