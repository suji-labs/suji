/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('manageController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();

    this.subscribe('menu');

    this.newMenu = {};

    this.helpers({
        menuList: () => {
            return Menu.find({});
        }
    });

    this.addItem = () => {
        Menu.insert(this.newMenu);
        this.newMenu = {};
    };

    this.removeItem = (item) => {
        Menu.remove({_id: item._id});
    };
});