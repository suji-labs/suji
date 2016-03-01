angular.module('suji').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('category', {
        parent: 'root',
        url: '/category',
        templateUrl: 'client/category/category.ng.html',
        controller: 'categoryCtrl'
      });
  }
]);
