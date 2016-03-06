angular.module("suji").controller("categoryCtrl", ['$scope', '$meteor', '$mdDialog',
    function($scope, $meteor, $mdDialog) {
        $scope.showAdd = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'client/category/views/add.category.ng.html',
                    targetEvent: ev,
                })
                .then(function(newCategory) {
                    if (newCategory) {
                        console.log(newCategory);
                        Category.insert({
                            categoryName: newCategory.name,
                            createAt: $scope.now
                        });
                        $scope.newCategory = null;
                    }
                });
        };
        $scope.sort = {
            createdAt: -1
        };
        $scope.now = new Date();

        $meteor.autorun($scope, function() {
            $meteor.subscribe('category', {}, $scope.getReactively('search')).then(function() {
                console.log('Got category');
            });
        });

        $scope.categoryList = $meteor.collection(function() {
            return Category.find({}, {
                sort: $scope.getReactively('sort')
            });
        });

        $scope.add = function(category) {
            $meteor.call('add', category);
        };

        $scope.remove = function(category) {
            $meteor.call('remove', category);
        };

        $scope.update = function(category) {
            $meteor.call('update', category);
        };

        $scope.addCategory = () => {
            Category.insert({
                categoryName: $scope.newCategory
            });
            $scope.newCategory = null;
        };

        $scope.removeCategory = (item) => {
            Category.remove({
                _id: item._id
            });
        };
        $scope.reset = function() {
            $scope.newCategory = {
                name: "",
            }
        };


        ///
        $scope.loadStuff = function() {
            $scope.promise = $timeout(function() {
                // loading
            }, 2000);
        };

        //Sort
        $scope.sortType     = 'categoryName'; // set the default sort type
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
