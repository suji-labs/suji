angular.module('suji').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider
      .state('employee', {
        parent: 'root',
        url: '/employee',
        templateUrl: 'client/employee/views/employee.ng.html',
        controller: 'employeeCtrl'
      });
  }
]);
