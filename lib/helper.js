cityExists = function(cityname) {
    return Cities.find({city: cityname}, {limit: 1}).count() > 0;
}

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

createTimespan = function(rangeInMonth){
    rangeInMonth = rangeInMonth || 13
    var time = moment(), timespan = [];
    time.subtract(rangeInMonth, 'month');
//go to first day of month
    time.date(1);
    time.hour(0);
    for (var i = 0; i <= rangeInMonth; i++) {
        timespan.push({
            year: time.year(), month: moment.months()[time.month()], timestamp: time.toISOString(), count: 0
        });
        time.add(1, 'month');
    }
    return timespan;
}