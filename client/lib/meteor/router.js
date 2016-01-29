if (Meteor.isClient) {
    Router.configure({
        notFoundTemplate: '404',
        layoutTemplate: 'layoutFull',
        loadingTemplate: 'loading'
    });
    Router.onBeforeAction(function() {
        $('body').scrollTop(0);
        this.next();
    });
}