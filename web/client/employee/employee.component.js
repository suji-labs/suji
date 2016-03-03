angular.module('suji-mr').directive('employee', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/employee/statistics.html',
        controllerAs: 'EmployeeController'
    }
});
