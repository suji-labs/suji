angular.module('suji-mr').directive('employee', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/employee/employee.html',
        controllerAs: 'EmployeeController'
    }
});
