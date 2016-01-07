FlowRouter.route(['/index', '/'], {
    subscriptions: function() {
        this.register('reports', Meteor.subscribe('reports'));
    },
    action: function() {
        BlazeLayout.render("mainLayout", {content: "index"});
    }
});

FlowRouter.route('/map', {
    subscriptions: function(params) {
        this.register('report', Meteor.subscribe('reports'));
    },
    action: function() {
        BlazeLayout.render("mainLayout", {content: "map"});
    }
});


FlowRouter.route('/details/:reportId', {
    subscriptions: function(params) {
        this.register('report', Meteor.subscribe('report', params.reportId));
    },
    action: function() {
        BlazeLayout.render("mainLayout", {content: "details"});
    }
});

