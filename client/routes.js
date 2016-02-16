/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<home></home>'
        })
        .state('startpos', {
            url: '/startpos',
            template: '<startpos></startpos>',
            resolve: {
                currentUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject();
                    }
                    else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('manage', {
            url: '/manage',
            template: '<manage></manage>',
            resolve: {
                currentUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject();
                    }
                    else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('category', {
            url: '/category',
            template: '<category></category>',
            resolve: {
                currentUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject();
                    }
                    else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('purchase', {
            url: '/purchase',
            template: '<purchase></purchase>',
            resolve: {
                currentUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject();
                    }
                    else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('article', {
            url: '/article',
            template: '<article></article>',
            resolve: {
                currentUser: ($q) => {
                    if (Meteor.userId() == null) {
                        return $q.reject();
                    }
                    else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('about', {
            url: '/about',
            template: '<about></about>'
        });

    $urlRouterProvider.otherwise("/home");
});