angular.module('suji').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('pos', {
        parent: 'root',
        url: '/pos',
        templateUrl: 'client/pos/views/pos.ng.html',
        controller: 'posCtrl'
      });
  }
]);
