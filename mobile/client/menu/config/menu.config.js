angular.module('suji').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('menu', {
        parent: 'root',
        url: '/menu',
        templateUrl: 'client/menu/views/menu.ng.html',
        controller: 'menuCtrl'
      });
  }
]);