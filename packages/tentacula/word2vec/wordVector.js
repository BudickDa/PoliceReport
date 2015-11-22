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
    add(word) {
        var values = this.values.map((w, i)=>{
            w += word.values[i];
            return w;
        });
        return new WordVector(null, values);
    };
    subtract(word) {
        var values = this.values.map((w, i)=> {
            w -= word.values[i];
            return w;
        });
        return new WordVector(null, values);
    }
}
WordVector = WordVectorClass;
