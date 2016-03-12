/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr', [
    'angular-meteor',
    'ui.router',
    'accounts.ui'
]);

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

window.onbeforeunload = function () {
    Meteor.logout();
};