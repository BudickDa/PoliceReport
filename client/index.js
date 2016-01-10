/**
 * Helpers
 */

Template.registerHelper('date', function (timestamp) {
    return moment(timestamp).format('DD.MM.YYYY');
});

Template.index.helpers({
    reports: function () {
        return Reports.find();
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
        return Reports.find({processed: 'Categorised'}).count();
    },
    categorisedPercent: function () {
        if (Reports.find().count() !== 0) {
            return Math.floor(Reports.find({processed: 'Categorised'}).count() / Reports.find().count() * 1000) / 10;
        }
        return 0;
    },
    unsafeCategorisedPercent: function () {
        if (Reports.find().count() !== 0) {
            return Math.floor(Reports.find({processed: {$ne: 'Not categorised'}}).count() / Reports.find().count() * 1000) / 10;
        }
        return 0;
    },
    password: function () {
        return Session.get('password');
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
function searchPage(start) {
    start = start || 0;
    Meteor.call('getText', `https://www.polizei.bayern.de/bepo/news/presse/archiv/index.html?type=archiv&rubid=rub-4&query=&submit=Suchen%21&periodselect=All&period=fromto&periodfrom=01.01.2010&periodto=${moment().format('DD.MM.YYYY')}&start=${start}`, function (err, finished) {
        if (err) {
            console.error(err.error, err.message);
            return;
        }
        if (Reports.find().count() < config.datasets || (config.datasets === -1 && !finished)) {
            return searchPage(start + 10);
        } else {
            console.log('All reports scrapped.');
        }
    });
}

/**
 * Events
 */
Template.index.events({
    'click #name-entity-recognition': function () {
        Meteor.call('saveNameEntityRecognition');
    },
    'click #w2v-name-entity-recognition': function () {
        Meteor.call('synonymNameEntityRecognition');
    },
    'click #bagOfWords': function () {
        Meteor.call('bagOfWords');
    },
    'click #load-data': function () {
        Meteor.call('empty', searchPage);
    },
    'click #reset-data': function () {
        Session.set('password', true)
    },
    'click #reset-data-confirm': function () {
        var code = document.getElementById('password').value;
        Meteor.call('reset', code);
        Session.set('password', false);
    }
});
Session.setDefault('password', false);


