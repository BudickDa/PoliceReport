Reports = new Mongo.Collection('reports');

if(Meteor.isServer){
    Meteor.publish('reports', function(){
        /**
         * do not show places without location
         */
       return Reports.find();
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