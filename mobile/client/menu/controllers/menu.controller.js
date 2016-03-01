angular.module("suji").controller("menuCtrl", ['$scope', '$meteor',
    function($scope, $meteor) {
        var table = $('#table');

        // Table bordered
        $('#table-bordered').change(function() {
            var value = $( this ).val();
            table.removeClass('table-bordered').addClass(value);
        });

        // Table striped
        $('#table-striped').change(function() {
            var value = $( this ).val();
            table.removeClass('table-striped').addClass(value);
        });

        // Table hover
        $('#table-hover').change(function() {
            var value = $( this ).val();
            table.removeClass('table-hover').addClass(value);
        });

        // Table color
        $('#table-color').change(function() {
            var value = $(this).val();
            table.removeClass(/^table-mc-/).addClass(value);
        });



        $scope.now = new Date();

        $scope.subscribe('menu');
        $scope.subscribe('category');

        $scope.helpers({
            menuList: () => {
                return Menu.find({});
            },
            categoryList: () => {
                return Category.find({});
            }
        });

        $scope.addItem = () => {
            ($scope.newMenu.TAX_MODE) ? taxMode = 'YES' : taxMode = 'NO';

            Menu.insert({
                name: $scope.newMenu.NAME,
                price: $scope.newMenu.PRICE,
                primeCost: $scope.newMenu.PRIME_COST,
                barcode : $scope.newMenu.BARCODE,
                taxMode: taxMode,
                category: $scope.newMenu.CATEGORY_NAME
            });
            $scope.newMenu = null;
        };

        $scope.removeItem = (item) => {
            Menu.remove({_id: item._id});
        };
    }
]);

