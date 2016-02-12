'use strict'

angular.module('sujiAngularApp')
.config(function($stateProvider) {
  $stateProvider
  .state('authentication', {
    url: '/authentication',
    templateUrl: 'client/authentication/authentication.view.ng.html',
    controller: 'AuthenticationCtrl',
    css: 'client/authentication/authentication.css'
  });
});