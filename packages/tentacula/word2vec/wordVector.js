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
        if (wordVector instanceof WordVector) {
            var values = this.values.map((word, i)=> {
                word += wordVector.values[i];
                return word;
            });
            return new WordVector(null, values);
        }
    };

    subtract(wordVector) {
        if (wordVector instanceof WordVector) {
            var values = this.values.map((word, i)=> {
                word -= wordVector.values[i];
                return word;
            });
            return new WordVector(null, values);
        }
    }
}
WordVector = WordVectorClass;
