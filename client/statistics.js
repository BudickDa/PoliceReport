var rangeInMonth = 12,
    burglariesTimespan = createTimespan(rangeInMonth),
    accidentsTimespan = createTimespan(rangeInMonth),
    burglariesChart, accidentsChart


Template.burglaries.rendered = function () {
    var burglariesCtx = document.getElementById("chart-burglaries").getContext("2d");
    burglariesChart = new Chart(burglariesCtx);
};

Template.accidents.rendered = function () {
    var accidentsCtx = document.getElementById("chart-accidents").getContext("2d");
    accidentsChart = new Chart(accidentsCtx);
};


Tracker.autorun(function () {
    var cursor = Reports.find(), subsReady = FlowRouter.subsReady('burglaries');
    if (burglariesChart) {
        paintGraph(cursor, subsReady, burglariesChart, burglariesTimespan);
    }
});

Tracker.autorun(function () {
    var cursor = Reports.find(), subsReady = FlowRouter.subsReady('accidents');
    if (accidentsChart) {
        paintGraph(cursor, subsReady, accidentsChart, accidentsTimespan);
    }
});
