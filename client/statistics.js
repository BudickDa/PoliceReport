var burglariesChart;
Template.statistics.onRendered(function () {
    var burglariesCtx = document.getElementById("burglaries").getContext("2d");
    burglariesChart = new Chart(burglariesCtx);
});

var rangeInMonth = 12;
var burglariesTimespan = createTimespan(rangeInMonth);
Tracker.autorun(function () {
    var burglariesCursor = Reports.find(), subsReady = FlowRouter.subsReady('burglaries');
    if (burglariesChart && subsReady) {
        burglariesCursor.forEach((doc)=> {
            burglariesTimespan.forEach((span, index)=> {
                if (index < rangeInMonth) {
                    if (moment(doc.timestamp).isBetween(moment(burglariesTimespan[index].timestamp), moment(burglariesTimespan[index + 1].timestamp))) {
                        span.count++;
                    }
                } else {
                    if (moment(doc.timestamp).isBetween(moment(burglariesTimespan[index].timestamp), moment())) {
                        span.count++;
                    }
                }
            });
        });

        var data = {
            labels: burglariesTimespan.map((span)=> {
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
                    data: burglariesTimespan.map((span)=> {
                        return span.count;
                    })
                }
            ]
        };
        burglariesChart.Line(data, {
            responsive: true
        });
    }
});
