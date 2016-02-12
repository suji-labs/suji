/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<index></index>'
        })
        .state('startpos', {
            url: '/startpos',
            template: '<startpos></startpos>'
        })
        .state('menu', {
            url: '/menu',
            template: '<menu></menu>'
        })
        .state('addCategory', {
            url: '/addCategory',
            template: '<addCategory></addCategory>'
        })
        .state('article', {
            url: '/article',
            template: '<article></article>'
        })
        .state('about', {
            url: '/about',
            template: '<about></about>'
        });

    $urlRouterProvider.otherwise("/home");
});