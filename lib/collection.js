Reports = new Mongo.Collection('reports');
Cities = new Mongo.Collection('cities');

if(Meteor.isServer){
    Meteor.publish('reports', function(){
        /**
         * do not show places without location
         */
       return [Reports.find({},{limit: 500, fields: {headline: 1, date: 1, location_detail: 1, station: 1, processed: 1, category: 1}})];
    });
    Meteor.publish('report', function(reportId){
        return Reports.find({_id: reportId});
    });

    Reports.allow({
        insert: function() {
          return true;
        },
        update: function(){
            return true;
        }
    });
}