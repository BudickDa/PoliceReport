Meteor.methods({
    empty: function(){
        Reports.remove({});
    },
    getHTML: function(url){
        var result = HTTP.get(url);
        if(result.statusCode === 404){
            throw new Meteor.Error(404, result.content);
        }
        if(result.statusCode === 500){
            throw new Meteor.Error(500, result.content);
        }
        return result.content;
    }
});