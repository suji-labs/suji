angular.module('suji').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('pos', {
        parent: 'root',
        url: '/pos',
        templateUrl: 'client/pos/pos.ng.html',
        controller: 'posCtrl'
      });
  }
]);
