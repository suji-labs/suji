angular.module("suji").controller("menuCtrl", ['$scope', '$meteor', '$mdDialog',
    function($scope, $meteor, $mdDialog) {
        $scope.showAdd = function(ev) {
            $mdDialog.show({
                    controller: DialogController,
                    templateUrl: 'client/menu/views/add.menu.ng.html',
                    targetEvent: ev,
                })
                .then(function(newMenu) {
                    if (newMenu) {
                        console.log(newMenu);
                        if (newMenu.tax_mode === 'true') {
                            taxMode = 'YES';
                        }
                        else {
                            taxMode = 'NO';
                        }

                        Menu.insert({
                            name: newMenu.name,
                            price: newMenu.price,
                            primeCost: newMenu.prime_cost,
                            barcode: newMenu.barcode,
                            taxMode: taxMode,
                            category: newMenu.category_name
                        });
                        $scope.newMenu = null;
                    }
                });
        };
        var table = $('#table');

        // Table bordered
        $('#table-bordered').change(function() {
            var value = $(this).val();
            table.removeClass('table-bordered').addClass(value);
        });

        // Table striped
        $('#table-striped').change(function() {
            var value = $(this).val();
            table.removeClass('table-striped').addClass(value);
        });

        // Table hover
        $('#table-hover').change(function() {
            var value = $(this).val();
            table.removeClass('table-hover').addClass(value);
        });

        // Table color
        $('#table-color').change(function() {
            var value = $(this).val();
            table.removeClass(/^table-mc-/).addClass(value);
        });

        $scope.now = new Date();

        $meteor.autorun($scope, function() {
            $meteor.subscribe('menu', {}, $scope.getReactively('search')).then(function() {
                console.log('Got menu');
            });
        });
        $meteor.autorun($scope, function() {
            $meteor.subscribe('category', {}, $scope.getReactively('search')).then(function() {
                console.log('Got category');
            });
        });
        $scope.menuList = $meteor.collection(function() {
            return Menu.find({}, {
                sort: $scope.getReactively('sort')
            });
        });
        $scope.categoryList = $meteor.collection(function() {
            return Category.find({});
        });

        $scope.removeItem = (item) => {
            Menu.remove({
                _id: item._id
            });
        };

        $scope.reset = function() {
            $scope.newMenu = {
                name: "",
                price: "",
                prime_cost: "",
                tax_mode: "",
                barcode: "",
                category_name: ""
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
