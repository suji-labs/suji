angular.module('suji-mr').controller('EmployeeController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();

    this.subscribe('employee');

    $scope.helpers({
        employeeList: () => {
            return Employee.find({});
        }
    });

    $scope.addEmployee = () => {
        Employee.insert({
            name: $scope.newEmployee.NAME,
            id: $scope.newEmployee.ID,
            job_title: $scope.newEmployee.JOB_TITLE,
            workhours : $scope.newEmployee.WORKHOURS
        });
        $scope.newEmployee = null;
    };

    $scope.removeEmployee = (item) => {
        Employee.remove({_id: item._id});
    };
});