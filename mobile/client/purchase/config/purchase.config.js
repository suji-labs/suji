angular.module('suji').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('purchase', {
        parent: 'root',
        url: '/purchase',
        templateUrl: 'client/purchase/views/purchase.ng.html',
        controller: 'purchaseCtrl'
      });
  }
]);