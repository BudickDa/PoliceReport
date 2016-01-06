Reports = new Mongo.Collection('reports');
Cities = new Mongo.Collection('cities');

if(Meteor.isServer){
    Meteor.publish('reports', function(){
        /**
         * do not show places without location
         */
       return [Reports.find(), Cities.find()];
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