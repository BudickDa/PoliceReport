normalizeWord = function (word) {
    if (typeof word !== 'string') {
        return word;
    }
    var lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
};

normalizeBagOfWords = function (bagOfWords) {
    /**
     * check if list is empty
     */
    if (_.isEmpty(bagOfWords)) {
        return bagOfWords;
    }

    /**
     * Find lowest value
     */
    var lowest = _.min(bagOfWords, function (count) {
        return count;
    });

    /**
     * get the 20 most used words
     */
    var sorted = Object.keys(bagOfWords).sort(function(a,b){return bagOfWords[a]-bagOfWords[b]});
    if(sorted.length>=20){
        sorted = sorted.slice(-20).reverse();
    }else{
        sorted = sorted.slice(sorted.length).reverse();
    }
    bagOfWords = _.filter(bagOfWords, function(word){
        console.log(word);
        return _.contains(sorted, word);
    });
    return sorted;
}