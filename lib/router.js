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

FlowRouter.route('/stats/burglaries', {
    subscriptions: function(params) {
        this.register('burglaries', Meteor.subscribe('burglary'));
    },
    action: function() {
        BlazeLayout.render("mainLayout", {content: "burglaries"});
    }
});
FlowRouter.route('/stats/accidents', {
    subscriptions: function(params) {
        this.register('accidents', Meteor.subscribe('accidents'));
    },
    action: function() {
        BlazeLayout.render("mainLayout", {content: "accidents"});
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

FlowRouter.route('/impressum', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "impressum"});
    }
});