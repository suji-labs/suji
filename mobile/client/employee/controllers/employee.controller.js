angular.module("suji").controller("employeeCtrl", ['$scope', '$meteor', '$mdDialog',
    function($scope, $meteor, $mdDialog) {
        $scope.jobList = [
            {title : 'Manager'},
            {title : 'Part Timer'},
            {title : 'Cashier'}
        ];

        $scope.showAdd = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'client/employee/views/add.employee.ng.html',
                    targetEvent: ev,
                })
                .then(function(newEmployee) {
                    if (newEmployee) {
                        console.log(newEmployee);
                        Employee.insert({
                            id: newEmployee.id,
                            name: newEmployee.name,
                            job_title: newEmployee.job_title,
                            join_date: new Date().format('yyyy/MM/dd a/p HH:mm:ss')
                        });
                        $scope.newEmployee = null;
                    }
                });
        };
        $scope.sort = {
            createdAt: -1
        };
        $scope.now = new Date();

        $meteor.autorun($scope, function() {
            $meteor.subscribe('employee', {}, $scope.getReactively('search')).then(function() {
                console.log('Got employee');
            });
        });

        $scope.employeeList = $meteor.collection(function() {
            return Employee.find({}, {
                sort: $scope.getReactively('sort')
            });
        });

        $scope.add = function(employee) {
            $meteor.call('add', employee);
        };

        $scope.remove = function(employee) {
            $meteor.call('remove', employee);
        };

        $scope.update = function(employee) {
            $meteor.call('update', employee);
        };

        $scope.removeEmployee = (item) => {
            Employee.remove({
                _id: item._id
            });
        };
        $scope.reset = function() {
            $scope.newEmployee = {
                id: "",
                name: "",
                job_title: "",
                join_date: ""
            }
        };

        //Sort
        $scope.sortType     = 'name'; // set the default sort type
        $scope.sortReverse  = false;  // set the default sort order
        $scope.searchFish   = '';     // set the default search/filter term
    }
]);

function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
};
