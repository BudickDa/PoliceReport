/**
 * Helpers
 */

Template.index.helpers({
    reports: function(){
        return Reports.find();
    },
    isLoading: function(){
        return Reports.find().count()!=config.datasets && Reports.find().count() != 0;
    }
});

Template.details.helpers({
    report: function(){
        return Reports.findOne(FlowRouter.getParam('reportId'));
    },
    date: function(date){
        return moment(date).format('DD.MM.YYYY');
    }
});


/**
 * Events
 */
Template.index.events({
    'click #mineData': function(){
        tagData();
    },
    'click #loadData': function () {
        Meteor.call('empty', function () {
            var max = config.datasets;
            for (var i = 0; i <= max - 10; i += 10) {
                getIds(`https://www.polizei.bayern.de/bepo/news/presse/archiv/index.html?type=archiv&rubid=rub-4&query=&submit=Suchen%21&periodselect=All&period=fromto&periodfrom=01.10.2014&periodto=31.10.2015&start=${i}`);
            }
        });
    }
});