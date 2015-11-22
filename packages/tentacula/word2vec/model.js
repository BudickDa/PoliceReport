var fs = Npm.require('fs');
var path = Npm.require('path');
var readline = Npm.require('readline');
var stream = Npm.require('stream');
var mime = Npm.require('mime');

class ModelClass {
    constructor(file) {
        this.vocabular = [];
        this.words, this.size;
        this.N;
        if (mime.lookup(file) === 'text/plain') {
            this.readTxtFile(file, this);
        } else {
            throw new Meteor.Error(500, 'The file has to be a txt-File.')
        }
    }

    getVector(word) {
        for (var i = 0; i < this.words; i++) {
            if (this.vocabular[i].word === word) {
                return this.vocabular[i];
            }
        }
        return null;
    }

    getVectors(words) {
        if (!this.words) {
            return this.vocabular;
        } else {
            return this.vocabular.filter(function (w) {
                return _.contains(this.words, w.word);
            });
        }
    }


    similarity(word1, word2) {
        var vectors = [];
        for (var i = 0; i < this.words; i++) {
            if (this.vocabular[i].word === word1 || this.vocabular[i].word === word2) {
                vectors.push(this.vocabular[i].values);
            }
        }
        if (vectors.length === 2) {
            var result = 0;
            for (i = 0; i < this.size; i++) {
                result += vectors[0][i] * vectors[1][i];
            }
            return result;
        } else {
            return null;
        }
    }
    ;


    getNearestWord(vector) {
        if (vector instanceof WordVector === true) {
            vector = vector.values;
        }
        vector = normalize(vector);

        var bestWord, bestDistance, c, a;

        for (c = 0; c < this.words; c++) {
            var distance = 0;
            for (a = 0; a < this.size; a++) {
                distance += vector[a] * this.vocabular[c].values[a];
            }
            if (c === 0 || distance > bestDistance) {
                bestDistance = distance;
                bestWord = this.vocabular[c].word;
            }
        }

        var object = {};
        object.word = bestWord;
        object.distance = bestDistance;
        return object;
    }

    getNearestWords(vector, inputN) {
        var d, i, c, a;

        this.N = inputN || 10;
        if (vector instanceof WordVector === true) {
            vector = vector.values;
        }
        vector = normalize(vector);

        var bestWord = new Array(this.N);
        var bestDistance = Array.apply(null, new Array(N)).map(Number.prototype.valueOf, -1);

        for (c = 0; c < words; c++) {
            var dist = 0;
            for (a = 0; a < size; a++) {
                dist += vector[a] * this.vocabular[c].values[a];
            }
            for (a = 0; a < this.N; a++) {
                if (dist > bestDistance[a]) {
                    for (d = this.N - 1; d > a; d--) {
                        bestDistance[d] = bestDistance[d - 1];
                        bestWord[d] = bestWord[d - 1];
                    }
                    bestDistance[a] = dist;
                    bestWord[a] = this.vocabular[c].word;
                    break;
                }
            }
        }

        var result = [];
        for (i = 0; i < this.N; i++) {
            var object = {};
            object.word = bestWord[i];
            object.distance = bestDistance[i];
            result[i] = object;
        }
        return result;

    }

    mostSimilar(inputPhrase, inputN) {
        this.N = inputN || 40;
        var phrase = {};
        var a, b, i, d;
        var phrase_words = inputPhrase.split(' ');
        phrase.words = phrase_words.map(function (word) {
            var object = {};
            object.word = word;
            object.position = -1;
            return object;
        });
        phrase.output = {};
        var bestWord = new Array(this.N);
        var bestDistance = Array.apply(null, new Array(N)).map(Number.prototype.valueOf, -1);
        var phraseWordsLength = phrase.words.length;
        for (a = 0; a < phraseWordsLength; a++) {
            for (b = 0; b < words; b++) {
                if (phrase.words[a].word === vocab[b].word) {
                    phrase.words[a].pos = b;
                    break;
                }
            }
            if (phrase.words[a].pos === -1) {
                console.log(`Out of dictionary word: ${phrase.words[a].word}.`);
            }
        }
        var vector = [];
        for (i = 0; i < size; i++) {
            vector[i] = 0;
        }
        for (b = 0; b < phraseWordsLength; b++) {
            if (phrase.words[b].position !== -1) {
                for (a = 0; a < size; a++) {
                    vector[a] += this.vocabular[phrase.words[b].position].values[a];
                }
            }
        }

        vector = normalize(vector);

        /**
         * Searching
         */
        var found = false;
        for (var c = 0; c < words; c++) {
            for (b = 0; b < phraseWordsLength; b++) {
                if (phrase.words[b].position === c) {
                    found = true;
                }
            }
            if (!found) {
                var distance = 0;
                for (a = 0; a < size; a++) {
                    distance += vector[a] * this.vocabular[c].values[a];
                }
                for (a = 0; a < this.N; a++) {
                    if (distance > bestDistance[a]) {
                        for (d = this.N - 1; d > a; d--) {
                            bestDistance[d] = bestDistance[d - 1];
                            bestWord[d] = bestWord[d - 1];
                        }
                        bestDistance[a] = distance;
                        bestWord[a] = this.vocabular[c].word;
                        break;
                    }
                }
            }
        }

        var result = [];
        for (i = 0; i < this.N; i++) {
            var object = {};
            object.word = bestWord[i];
            object.distance = bestDistance[i];
            result[i] = object;
        }
        return result;
    }
    ;


    analogy(word, pair, inputN) {
        this.N = inputN || 40;
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

        var bestWords = new Array(this.N);
        var bestDistance = Array.apply(null, new Array(this.N)).map(Number.prototype.valueOf, 0);

        var phraseWords = phrase.words;
        var phraseWordsLength = phraseWords.length;

        var vector = Array.apply(null, new Array(size)).map(Number.prototype.valueOf, 0);

        var a, b, i, d;
        for (a = 0; a < phraseWordsLength; a++) {
            for (b = 0; b < words; b++) {
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

        for (b = 0; b < phraseWordsLength; b++) {
            if (phrase.words[b].pos !== -1) {
                for (a = 0; a < size; a++) {
                    vector[a] += this.vocabular[phrase.words[b].pos].values[a];
                }
            }
        }

        for (a = 0; a < size; a++) {
            vector[a] = this.vocabular[phraseWords[1].position].values[a] - this.vocabular[phraseWords[0].position].values[a] + this.vocabular[phraseWords[2].position].values[a];
        }

        vector = normalize(vector);

        for (var c = 0; c < words; c++) {
            if (c === phraseWords[0].position) {
                continue;
            }
            if (c === phraseWords[1].position) {
                continue;
            }
            if (c === phraseWords[2].position) {
                continue;
            }
            a = 0;
            for (b = 0; b < phraseWordsLength; b++) {
                if (phraseWords[b].pos === c) {
                    a = 1;
                }
            }
            if (a === 1) {
                continue;
            }
            var distance = 0;
            for (a = 0; a < size; a++) {
                distance += vector[a] * this.vocabular[c].values[a];
            }
            for (a = 0; a < this.N; a++) {
                if (distance > bestDistance[a]) {
                    for (d = this.N - 1; d > a; d--) {
                        bestDistance[d] = bestDistance[d - 1];
                        bestWords[d] = bestWords[d - 1];
                    }
                    bestDistance[a] = distance;
                    bestWords[a] = this.vocabular[c].word;
                    break;
                }
            }
        }
        var result = [];
        for (i = 0; i < this.N; i++) {
            var object = {};
            object.word = bestWords[i];
            object.distance = bestDistance[i];
            result[i] = object;
        }
        return result;
    }


    readTxtFile(file) {
        this.ready = false;
        var instream = fs.createReadStream(file);
        var outstream = new stream();
        var readLineInterface = readline.createInterface(instream, outstream);
        var counter = 0;

        readLineInterface.on('line', function (line) {
            var array, length;
            if (counter === 0) {
                array = line.split(' ');
                this.words = array[0];
                this.size = array[1];
            } else {
                array = line.split(' ');
                var word = array.shift();
                array.pop();
                var values = array.map(function (item) {
                    return parseFloat(item);
                });
                var object = new WordVector(word, values);
                object.values = normalize(object.values);
                this.vocabular.push(object);
            }
            counter++;
        });
        readLineInterface.on('close', function () {
            this.words = words;
            this.size = size;
            this.ready = true;
        });
    }
}

Model = ModelClass;