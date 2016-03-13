angular.module('suji').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('bell', {
        parent: 'root',
        url: '/bell',
        templateUrl: 'client/bell/views/bell.ng.html',
        controller: 'bellCtrl'
      });
  }
]);
