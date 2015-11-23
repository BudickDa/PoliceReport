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
    }
});

Template.details.helpers({
    report: function () {
        return Reports.findOne(FlowRouter.getParam('reportId'));
    }
});


/**
 * Events
 */
Template.index.events({
    'click #mineData': function () {
        Meteor.call('tagData');
    },
    'click #loadData': function () {
        Meteor.call('empty', function () {
            var max = config.datasets;
            for (var i = 0; i <= max - 10; i += 10) {
                Meteor.call('getText', `https://www.polizei.bayern.de/bepo/news/presse/archiv/index.html?type=archiv&rubid=rub-4&query=&submit=Suchen%21&periodselect=All&period=fromto&periodfrom=01.10.2014&periodto=31.10.2015&start=${i}`, function (err) {
                    if (err) {
                        console.error(err.error, err.message);
                    } else {
                        console.log(`Sites ${i} - ${i + 10} where fetched successfully`);
                    }
                });
            }
        });
    }
});