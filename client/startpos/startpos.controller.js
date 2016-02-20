/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('POSController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();
    $scope.order = [];
    $scope.isDisabled = true;

    this.menuSort = {
        name: 1
    };
    this.categorySort = {
        categoryName: 1
    };
    this.subscribe('category', () => {
        return [
            {
                sort: this.getReactively('categorySort')
            }
        ]
    });

    this.subscribe('menu', () => {
        return [
            {
                sort: this.getReactively('menuSort')
            }
        ]
    });
    this.subscribe('purchase');

    $scope.helpers({
        menuList: () => {
            return Menu.find({}, {sort: this.getReactively('menuSort')}).fetch();
        },
        categoryList: () => {
            return Category.find({}, {sort: this.getReactively('categorySort')}).fetch();
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
        console.log(item.barcode);
        $scope.orderedItemCnt = 1;
        var foodItem = {
            orderedItemCnt: 1,
            totalPrice: item.price,
            itemId: item.name,
            id: $scope.itemsCnt,
            item: item,
            barcode: item.barcode
        };

        var cartItems = $.grep($scope.order, function (e) {
            return e.itemId == item.name;
        });

        if (cartItems.length) {
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
                barcode: $scope.order[i].barcode,
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

    $scope.barcodeInput = () => {
        $scope.add(Menu.findOne({barcode: ($scope.barcode.productBarcode).trim()}));
        $scope.barcode.productBarcode = '';
    }
});