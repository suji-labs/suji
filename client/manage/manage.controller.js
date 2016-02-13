/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('manageController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.nowTime = new Date();

    $scope.practice = [{name: 'b', price: 10, primepcost: 10, taxmode: false, category: 'FOOD'},
        {name: 'c', price: 10, primepcost: 10, taxmode: false, category: 'FOOD'}];

    this.subscribe('menu');

    this.newMenu = {};


    $scope.helpers({
        menuList: () => {
            console.log(Menu.find().fetch());
            return Menu.find({});
        },
        menuFindOne: () => {
            return Menu.findOne();
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