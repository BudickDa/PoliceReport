Reports = new Mongo.Collection('reports');

if(Meteor.isServer){
    Meteor.publish('reports', function(){
       return Reports.find();
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