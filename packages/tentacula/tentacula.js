var fs = Npm.require('fs');
var path = Npm.require('path');
var fuzzy = Npm.require('fuzzy');

var sortDistance = function (a, b) {
    if (a.distance < b.distance) {
        return 1;
    }
    if (a.distance > b.distance) {
        return -1;
    }
    return 0;
};




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
     * Returns the entity with the highest score found in text
     * @param text
     * @param entities
     * @returns {{entity: string, score: number}}
     */
    static nameEntityRecognition(text, entities) {
        check(text, String);
        text = JSON.parse(JSON.stringify(text));
        var result = {
            entity: '',
            score: 1000
        };
        _.forEach(entities, (entity)=> {
            var needle = fuzzy.match(entity, text);
            if (needle && needle.score > result.score) {
                result.score = needle.score;
                result.entity = entity;
            }
        });
        if (result.entity === '') {
            return null;
        }
        return result;
    }

    /**
     * Returns the entity with the highest score found in text
     * Uses a synonym-object to get variations of each entity
     * @param text
     * @param entities
     * @returns {{entity: string, score: number}}
     */
    static synonymNameEntityRecognition(text, entities, synonyms) {
        check(text, String);
        text = JSON.parse(JSON.stringify(text));
        var result = {
            entity: '',
            score: 0
        };
        _.forEach(entities, (entity)=> {
            console.log('Verbrechen: ', entity);
            var score = 0;
            _.forEach(synonyms[entity], (word)=> {
                console.log(word);
                var needle = fuzzy.match(word, text);
                if (needle) {
                    score += needle.score;
                }
            });
            if (score > result.score) {
                result.score = score;
                result.entity = entity;
            }
        });
        return result;
    }

    /**
     * Returns the entity with the highest score found in text
     * Uses W2V to get variations of each entity
     * @param text
     * @param entities
     * @returns {{entity: string, score: number}}
     */
    static vectorNameEntityRecognition(text, entities, vector) {
        check(text, String);
        text = JSON.parse(JSON.stringify(text));
        var result = {
            entity: '',
            score: 1000
        };
        _.forEach(entities, (entity)=> {
            console.log('Verbrechen: ', entity);
            _.forEach(vector.getNearestWords(entity, 5), (synomymObject)=> {
                var synomym = synomymObject.word;
                console.log(synomym);
                var needle = fuzzy.match(synomym, text);
                if (needle && needle.score > result.score) {
                    result.score = needle.score;
                    result.entity = entity;
                }
            });
        });
        if (result.entity === '') {
            return null;
        }
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

    /**
     * creates a bag of words object from a text by tokenisation.
     * @param text
     * @returns {{}}
     */
    static createBagOfWords(text) {
        check(text, String);
        var tokens = text.match(/[\w\u00C0-\u00ff]+/g), bagOfWords = {};
        tokens.forEach((token)=> {
            if (bagOfWords[token]) {
                bagOfWords[token]++;
            } else {
                bagOfWords[token] = 1;
            }
        });
        return bagOfWords;
    }
}
W2V = {};
Tentacula = TentaculaClass;
TentaculaClass.fuzzy = fuzzy;