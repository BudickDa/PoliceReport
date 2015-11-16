// Write your package code here!

class TentaculaClass {
    /**
     * Declinates a word and returns its variation in an array
     * @param word
     * @returns {Array}
     */
    static declinate(word) {
        var words = [], tmp;
        words.push(word);
        words.push(`${word}e`);
        words.push(`${word}er`);
        words.push(`${word}en`);
        words.push(`${word}em`);
        words.push(`${word}in`);
        words.push(`${word}innen`);
        words.push(`${word}a`);
        tmp = words;
        tmp.forEach((w)=> {
            words.push(w.toUpperCase());
            words.push(w.toLowerCase());
        });

        return words;
    }

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
                var declinations = Tentacula.declinate(keyword);
                declinations.forEach((declination)=>{
                    if (found) {
                        return;
                    }
                    if (headline.includes(keyword)) {
                        found = true;
                    } else if (text.includes(keyword)) {
                        found = true;
                    }
                    if (found) {
                        result.push(tag.name);
                    }
                })

            })
        });
        return result;
    }
}
Tentacula = TentaculaClass;