FlowRouter.route(['/index', '/'], {
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "index"});
    }
});
FlowRouter.route('/details/:reportId', {
    action: function(params) {
        BlazeLayout.render("mainLayout", {content: "details"});
    }
});

