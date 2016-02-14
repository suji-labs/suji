/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('POSController', function ($scope, $reactive) {
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
});