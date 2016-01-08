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
     * Sort object by key (word) and divide every value by the lowest one
     */
    var sorted = {};
    Object.keys(bagOfWords).sort().forEach(function(key) {
        sorted[key] = bagOfWords[key]/lowest;
    });


    return sorted;
}