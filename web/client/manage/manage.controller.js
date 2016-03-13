/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('manageController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();

    this.subscribe('menu');
    this.subscribe('category');

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
});