cityExists = function (cityname) {
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
    var sorted = Object.keys(bagOfWords).sort(function (a, b) {
        return bagOfWords[a] - bagOfWords[b]
    });
    if (sorted.length >= 20) {
        sorted = sorted.slice(-20).reverse();
    } else {
        sorted = sorted.slice(sorted.length).reverse();
    }
    bagOfWords = _.filter(bagOfWords, function (word) {
        console.log(word);
        return _.contains(sorted, word);
    });
    return sorted;
}

createTimespan = function (rangeInMonth) {
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


//only on client
if (Meteor.isClient) {
    /**
     * Paints a graph
     * @param cursor
     * @param subsReady
     * @param chart
     * @param timespan
     */
    paintGraph = function (cursor, subsReady, chart, timespan) {
        var rangeInMonth = timespan.length - 1;
        if (chart && subsReady) {
            cursor.forEach((doc)=> {
                timespan.forEach((span, index)=> {
                    if (index < rangeInMonth) {
                        if (moment(doc.timestamp).isBetween(moment(timespan[index].timestamp), moment(timespan[index + 1].timestamp))) {
                            span.count++;
                        }
                    } else {
                        if (moment(doc.timestamp).isBetween(moment(timespan[index].timestamp), moment())) {
                            span.count++;
                        }
                    }
                });
            });
            var data = {
                labels: timespan.map((span)=> {
                    return `${span.month} ${span.year}`;
                }),
                datasets: [
                    {
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: timespan.map((span)=> {
                            return span.count;
                        })
                    }
                ]
            };
            chart.Line(data, {
                responsive: true
            });
        }
    };

}