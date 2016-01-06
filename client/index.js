/**
 * Helpers
 */

Template.registerHelper('date', function (timestamp) {
    return moment(timestamp).format('DD.MM.YYYY');
});

Template.index.helpers({
    reports: function () {
        return Reports.find({location: {$ne: false}});
    },
    isLoading: function () {
        return Reports.find().count() < config.datasets && Reports.find().count() !== 0;
    },
    counter: function () {
        return `${Reports.find().count()}/${config.datasets}`;
    },
    elementCount: function () {
        return Reports.find({location: {$ne: false}}).count();
    },
    categorisedCount: function () {
        return Reports.find({category: {$ne: ''}}).count();
    },
    categorisedPercent: function () {
        if (Reports.find({category: {$ne: ''}}).count() !== 0) {
            return Reports.find({category: {$ne: ''}}).count() / Reports.find({location: {$ne: false}}).count();
        }
        return 0;
    }
});

Template.details.helpers({
    report: function () {
        return Reports.findOne(FlowRouter.getParam('reportId'));
    }
});

/**
 * Search page
 */
function searchPage(start, count) {



    start = start || 0;
    count = count || config.datasets;
    var max = start + count,
        missedReports = 0,
        running = 0;
    for (var i = start; i < max; i += 10) {
        running++;
        Meteor.call('getText', `https://www.polizei.bayern.de/bepo/news/presse/archiv/index.html?type=archiv&rubid=rub-4&query=&submit=Suchen%21&periodselect=All&period=fromto&periodfrom=01.01.2010&periodto=${moment().format('DD.MM.YYYY')}&start=${i}`, function (err, missed) {
            if (err) {
                console.error(err.error, err.message);
            }
            missedReports += missed;
            running--;
            console.log('Running processes: ', running);
        });
    }
    var interval = Meteor.setInterval(function () {
        console.log(running);
        if (running === 0) {
            Meteor.clearInterval(interval);
            console.log('Final missed reports: ', missedReports);
            if (missedReports > 0) {
                searchPage(max, missedReports);
            }
        }
    }, 250);
}

/**
 * Events
 */
Template.index.events({
    'click #name-entity-recognition': function () {
        Meteor.call('nameEntityRecognition');
    },
    'click #word2vec': function () {
        Meteor.call('word2vec');
    },
    'click #load-data': function () {
        Meteor.call('empty', searchPage);
    }
});