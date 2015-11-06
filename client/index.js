Template.index.helpers({
    reports: function(){
        return Reports.find();
    }
});

Template.details.helpers({
    report: function(){
        return Reports.findOne(FlowRouter.getParameter('reportId'));
    },
    date: function(date){
        return moment(date).format('DD.MM.YYYY');
    }
})