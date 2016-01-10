Reports = new Mongo.Collection('reports');
Cities = new Mongo.Collection('cities');

if (Meteor.isServer) {
    Meteor.publish('reports', function () {
        /**
         * do not show places without location
         */
        return [Reports.find({$or: [{processed: 'Not categorised'}, {processed: 'Categorised'}]}, {
            limit: 150,
            fields: {headline: 1, timestamp: 1, location_detail: 1, station: 1, processed: 1, category: 1, url: 1}
        })];
    });
    Meteor.publish('report', function (reportId) {
        return Reports.find({_id: reportId});
    });

    Meteor.publish('burglary', function () {
        return Reports.find({'category.entity': 'Einbruch', 'processed': 'Categorised'}, {sort: ['timestamp', 'desc']});
    });

    Meteor.publish('accidents', function () {
        return Reports.find({
            'category.entity': 'Verkehrsunfall',
            'processed': 'Categorised'
        }, {sort: ['timestamp', 'desc']});
    });
}