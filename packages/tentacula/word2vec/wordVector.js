/**
 * Represents a Word Vector.
 * @param{string} word - the word the vector represents
 * @param{array} values - elements of the word vector
 * @constructor
 */
class WordVectorClass {
    constructor(word, values) {
        this.word = word;
        this.values = values;
    }

    add(wordVector) {
        if (wordVector instanceof W2V.WordVector) {
            var values = this.values.map((word, i)=> {
                word += wordVector.values[i];
                return word;
            });
            return new W2V.WordVector(null, values);
        }
    };

    subtract(wordVector) {
        if (wordVector instanceof W2V.WordVector) {
            var values = this.values.map((word, i)=> {
                word -= wordVector.values[i];
                return word;
            });
            return new W2V.WordVector(null, values);
        }
    }

    normalize() {
        var normalizeFnc = Npm.require('vectors/normalize')(this.values.length)
        this.values = normalizeFnc(this.values);
    }
}
W2V.WordVector = WordVectorClass;
