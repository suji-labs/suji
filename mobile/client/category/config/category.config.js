angular.module('suji').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('category', {
        parent: 'root',
        url: '/category',
        templateUrl: 'client/category/views/category.ng.html',
        controller: 'categoryCtrl'
      });
  }
]);
