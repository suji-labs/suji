'use strict'

angular.module('sujiAngularApp')
.config(function($stateProvider) {
  $stateProvider
  .state('authenticate', {
    url: '/authenticate',
    templateUrl: 'client/authenticate/authenticate.view.ng.html',
    controller: 'AuthenticateCtrl',
    css: 'client/authenticate/authenticate.css'
  });
});