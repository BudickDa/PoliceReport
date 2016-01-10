var fs = Npm.require('fs');
var path = Npm.require('path');
var readline = Npm.require('readline');
var stream = Npm.require('stream');

var sortDistance = function (a, b) {
    if (a.distance < b.distance) {
        return 1;
    }
    if (a.distance > b.distance) {
        return -1;
    }
    return 0;
};

class ModelClass {
    constructor() {
        this.vocabular = [];
        this.words, this.size;
    }

    getVector(word) {
        var result = _.filter(this.vocabular, (item)=> {
            return item.word === word;
        });

        if (result.length === 1) {
            return result[0];
        }
        return null;
    }

    getVectors(wordArray) {
        var result = _.filter(this.vocabular, (item)=> {
            return _.contains(wordArray, item.word);
        });
        return result;
    }

    similarity(word1, word2) {
        var vectors = [];

        _.forEach(this.vocabular, (vocVector)=> {
            if (vocVector.word === word1 || vocVector.word === word2) {
                vectors.push(vocVector.values);
            }
        });
        if (vectors.length === 2) {
            var result = 0;
            for (var i = 0; i < this.size; i++) {
                result += vectors[0][i] * vectors[1][i];
            }
            return result;
        } else {
            return null;
        }
    };


    getNearestWord(word) {
        var vector, wordVector, result = {
            word: false,
            distance: false
        };
        if (word) {
            wordVector = this.getVector(word);
            if (wordVector instanceof W2V.WordVector) {
                wordVector.normalize();
                vector = wordVector.values;
            } else {
                throw new Meteor.Error(404, `Word ${word} is not in vocabulary.`);
            }
        } else {
            throw new Meteor.Error(500, 'getNearestWord needs a string as parameter.');
        }
        for (var c = 0; c < this.words; c++) {
            var distance = 0;
            for (var a = 0; a < this.size; a++) {
                distance += vector[a] * this.vocabular[c].values[a];
            }
            if (!result.word || distance > result.distance) {
                result = {
                    word: this.vocabular[c].word,
                    distance: distance
                };
            }
        }
        return result;
    }

    getNearestWords(word, count) {
        count = count || 10;
        var vector, wordVector, result = [];
        if (word) {
            wordVector = this.getVector(word);
            if (wordVector instanceof W2V.WordVector) {
                wordVector.normalize();
                vector = wordVector.values;
            } else {
                console.log(`Word ${word} is not in vocabulary.`);
                return [];
            }
        } else {
            throw new Meteor.Error(500, 'getNearestWord needs a string as parameter.');
        }

        for (var c = 0; c < this.words; c++) {
            var distance = 0;
            for (var a = 0; a < this.size; a++) {
                distance += vector[a] * this.vocabular[c].values[a];
            }
            if (distance > 0) {
                var newItem = {
                    word: this.vocabular[c].word,
                    distance: distance
                };
                if (result.length < count) {
                    result.push(newItem);
                    result.sort(sortDistance);
                } else if (newItem.distance > result[count - 1].distance) {
                    result[count - 1] = newItem;
                    result.sort(sortDistance);
                }
            }
        }
        return result;
    }

    mostSimilar(inputPhrase, count) {
        count = count || 40;
        /**
         * replace all punctuation and double whitespaces
         */
        inputPhrase = inputPhrase.replace(/^[\u00C0-\u017Fa-zA-Z'][\u00C0-\u017Fa-zA-Z-' ]+[\u00C0-\u017Fa-zA-Z']|_/g, "");

        var phraseWords = inputPhrase.split(' '),
            result = [],
            bagOfWords = _.flatten(_.map(phraseWords, (word)=> {
                return this.getNearestWords(word, count);
            }));
        bagOfWords = _.map(bagOfWords, (item)=>{
            var distance = 0;
           _.forEach(bagOfWords, (sameItem)=>{
              if(sameItem.word===item.word){
                  distance += sameItem.distance;
              }
           });
            item.distance = distance;
            return item;
        });
        bagOfWords = _.uniq(bagOfWords, function(item){
            return item.word;
        });
        bagOfWords.sort(sortDistance);
        return bagOfWords.slice(0, count);
    }


    analogy(word, pair, inputN) {
        inputN = inputN || 40;
        if (typeof word !== 'string') {
            throw new Meteor.Error(500, 'Parameter word has to be a string.');
        }
        if (_.isArray(pair) === false) {
            throw new Meteor.Error(500, 'Parameter pair has to be an array');
        }

        var phrase = {};
        phrase.words = pair;
        phrase.words.push(word);
        phrase.words = phrase.words.map((word)=> {
            var object = {};
            object.word = word;
            object.position = -1;
            return object;
        });
        phrase.output = {};

        var bestWords = new Array(inputN);
        var bestDistance = Array.apply(null, new Array(inputN)).map(Number.prototype.valueOf, 0);

        var phraseWords = phrase.words;
        var phraseWordsLength = phraseWords.length;

        var vector = Array.apply(null, new Array(size)).map(Number.prototype.valueOf, 0);

        for (var a = 0; a < phraseWordsLength; a++) {
            for (var b = 0; b < this.words; b++) {
                if (phrase.words[a].word === this.vocabular[b].word) {
                    phrase.words[a].position = b;
                    break;
                }
            }
            if (phrase.words[a].pos === -1) {
                console.log(`Out of dictionary word: ${phrase.words[a].word}.`);
                break;
            }
        }

        for (var b = 0; b < phraseWordsLength; b++) {
            if (phrase.words[b].pos !== -1) {
                for (a = 0; a < size; a++) {
                    vector[a] += this.vocabular[phrase.words[b].pos].values[a];
                }
            }
        }

        for (var a = 0; a < size; a++) {
            vector[a] = this.vocabular[phraseWords[1].position].values[a] - this.vocabular[phraseWords[0].position].values[a] + this.vocabular[phraseWords[2].position].values[a];
        }

        vector.normalize();

        for (var c = 0; c < this.words; c++) {
            var next = false;
            if (c !== phraseWords[0].position || c !== phraseWords[1].position || c !== phraseWords[2].position) {
                for (var b = 0; b < phraseWordsLength; b++) {
                    if (phraseWords[b].pos === c) {
                        next = true;
                    }
                }
                if (!next) {
                    var distance = 0;
                    for (var a = 0; a < size; a++) {
                        distance += vector[a] * this.vocabular[c].values[a];
                    }
                    for (var a = 0; a < inputN; a++) {
                        if (distance > bestDistance[a]) {
                            for (var d = inputN - 1; d > a; d--) {
                                bestDistance[d] = bestDistance[d - 1];
                                bestWords[d] = bestWords[d - 1];
                            }
                            bestDistance[a] = distance;
                            bestWords[a] = this.vocabular[c].word;
                            break;
                        }
                    }
                }
            }
        }
        var result = [];
        for (var i = 0; i < inputN; i++) {
            var object = {};
            object.word = bestWords[i];
            object.distance = bestDistance[i];
            result[i] = object;
        }
        return result;
    }


    readTxtFile(file) {
        var instream = fs.createReadStream(file);
        var outstream = new stream();
        var readLineInterface = readline.createInterface(instream, outstream);
        this.loaded = false;
        readLineInterface.on('line', (line)=> {
            var array = line.split(' ');
            if (array.length === 2) {
                this.words = array[0];
                this.size = array[1];
            } else {
                array = line.split(' ');
                var word = array[0];
                array.shift();
                array.pop();
                var values = _.map(array, (value)=> {
                    return parseFloat(value);
                });
                this.vocabular.push(new W2V.WordVector(word, values));
            }
        });
        readLineInterface.on('close', ()=> {
            this.loaded = true;
        });

    }
}

W2V.Model = ModelClass;