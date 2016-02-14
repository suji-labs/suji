/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('POSController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();
    $scope.order = [];
    $scope.isDisabled = true;

    this.subscribe('menu');
    this.subscribe('category');
    this.subscribe('purchase');

    $scope.helpers({
        menuList: () => {
            return Menu.find({});
        },
        categoryList: () => {
            return Category.find({});
        }
    });

    $scope.findCategory = (item) => {
        return Menu.find({category: item}).fetch();
    };

    $scope.getSum = function() {
        var sum = 0;

        for (var i = 0; i < $scope.order.length; i++) {
            sum += parseInt($scope.order[i].totalPrice, 10);
        }
        return sum;
    };

    $scope.add = (item) => {
        $scope.orderedItemCnt = 1;
        var foodItem = {
            orderedItemCnt: 1,
            totalPrice: item.price,
            itemId: item.name,
            id: $scope.itemsCnt,
            item: item
        };

        var cartItems = $.grep($scope.order, function (e) {
            return e.itemId == item.name;
        });

        if (cartItems.length > 0 && !isEmpty($scope.order)) {
            cartItems[0].orderedItemCnt = ++cartItems[0].orderedItemCnt;
            cartItems[0].totalPrice = item.price * cartItems[0].orderedItemCnt;
        }
        else {
            $scope.order.push(foodItem);
            $scope.itemsCnt = $scope.order.length;
        }
    };

    $scope.addItem = (item, index) => {
        item.orderedItemCnt = ++item.orderedItemCnt;
        item.totalPrice = item.item.price * item.orderedItemCnt;
    };

    $scope.subtractItem = function (item, $index) {
        if (item.orderedItemCnt > 1) {
            item.orderedItemCnt = --item.orderedItemCnt;
            item.totalPrice = item.item.price * item.orderedItemCnt;
        }
        else {
            $scope.isDisabled = true;
        }
    };

    $scope.deleteItem = (index) => {
        $scope.order.splice(index, 1);
    };

    $scope.checkout = () => {
        for (var i = 0; i < $scope.order.length; i++) {
            Purchase.insert({
                name: $scope.order[i].itemId,
                barcode: '123456',
                quantity: $scope.order[i].orderedItemCnt,
                totalPrice: $scope.order[i].totalPrice,
                time: new Date().toString()
            });
        }
        window.alert("Total Price : " + $scope.getSum());
        $scope.order = [];
    };

    $scope.clearOrder = () => {
        $scope.order = [];
    };
});