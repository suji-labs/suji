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

    $scope.itemsCnt = 1;
    $scope.order = [];
    $scope.isDisabled = true;

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    $scope.add = function (item) {
        $scope.orderedItemCnt = 1;
        var foodItem = {
            orderedItemCnt: 1,
            totalPrice: item.PRICE,
            itemId: item.NAME,
            id: $scope.itemsCnt,
            item: item
        };

        // Find if the item is already in Cart
        var cartItems = $.grep($scope.order, function (e) {
            return e.itemId == item.NAME;
        });

        if (cartItems.length > 0 && !isEmpty($scope.order)) {
            cartItems[0].orderedItemCnt = ++cartItems[0].orderedItemCnt;
            cartItems[0].totalPrice = item.PRICE * cartItems[0].orderedItemCnt;
        }
        else {
            $scope.order.push(foodItem);
            $scope.itemsCnt = $scope.order.length;
        }
    };

    $scope.getSum = function () {
        var i = 0,
            sum = 0;

        for (; i < $scope.order.length; i++) {
            sum += parseInt($scope.order[i].totalPrice, 10);
        }
        return sum;
    };

    $scope.addItem = function (item, index) {
        item.orderedItemCnt = ++item.orderedItemCnt;
        item.totalPrice = item.item.PRICE * item.orderedItemCnt;
    };


    $scope.subtractItem = function (item, $index) {
        if (item.orderedItemCnt > 1) {
            item.orderedItemCnt = --item.orderedItemCnt;
            item.totalPrice = item.item.PRICE * item.orderedItemCnt;
        }
        else {
            $scope.isDisabled = true;
            // isDisabled = false;
            // $("#SubstractItemBtn").prop("disabled", true);
        }
    };

    $scope.deleteItem = function (index) {
        $scope.order.splice(index, 1);
    };

    $scope.checkout = function (index) {
        $http.post('/api/v1.1/purchase/add/' + $scope.username, $scope.order).success(function (response) {
            if (response) console.log(response);
            alert("Order total: $" + $scope.getSum() + "\n\nPayment received. Thanks.");
        });
    };

    $scope.clearOrder = function () {
        $scope.order = [];
    };
});