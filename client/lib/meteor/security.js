/*
Filters are used in every controller to manage which roles have access to the route.
Security can and should also be controlled in server publish
 */
var filters;

filters = {
    security_isUser: function() {
        if (!Meteor.loggingIn() && !Meteor.user()) {
            Router.go('home');
        }
        else {
            this.next();
        }
    },
    security_isAdmin: function() {
        if (Meteor.user()) {
            if (!Roles.userIsInRole(Meteor.user()._id, ['admin'])) {
                console.log("Security: No access...");
                Router.go('home');
            }
            else {
                this.next();
            }
        }
    },
    security_isContent: function() {
        if (Meteor.user()) {
            if (!Roles.userIsInRole(Meteor.user()._id, ['content'])) {
                console.log("Security: No access...");
                Router.go('home');
            }
            else {
                this.next();
            }
        }
    }
};

this.filters = filters;