Reports = new Mongo.Collection('reports');

if(Meteor.isServer){
    Meteor.publish('reports', function(){
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