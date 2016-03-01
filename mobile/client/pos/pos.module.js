angular.module("suji").controller("posCtrl", ['$scope', '$meteor', 
  function($scope, $meteor) {
    $scope.now = new Date();
    $scope.order = [];
    $scope.isDisabled = true;

    $("#barcodeInput").focus();

    $("html").click(function() {
      $("#barcodeInput").focus();
    });

    $scope.menuSort = {
      name: 1
    };

    $scope.categorySort = {
      categoryName: 1
    };

    $scope.subscribe('category', () => {
      return [{
        sort: $scope.getReactively('categorySort')
      }]
    });

    $scope.subscribe('menu', () => {
      return [{
        sort: $scope.getReactively('menuSort')
      }]
    });

    $scope.subscribe('purchase');

    $scope.helpers({
      menuList: () => {
        return Menu.find({}, {
          sort: $scope.getReactively('menuSort')
        }).fetch();
        console.log(menuList);
      },
      categoryList: () => {
        return Category.find({}, {
          sort: $scope.getReactively('categorySort')
        }).fetch();
      }
    });

    $scope.findCategory = (item) => {
      return Menu.find({
        category: item
      }).fetch();
    };

    $scope.getSum = function() {
      var sum = 0;

      for (var i = 0; i < $scope.order.length; i++) {
        sum += parseInt($scope.order[i].totalPrice, 10);
      }
      return sum;
    };

    $scope.add = (item) => {
      if (item == null) {
        window.alert("존재하지 않는 상품입니다.");
        return;
      }

      $scope.orderedItemCnt = 1;
      var product = {
        orderedItemCnt: 1,
        totalPrice: item.price,
        itemId: item.name,
        barcode: item.barcode
      };

      var cartItems = $.grep($scope.order, function(e) {
        return e.itemId == item.name;
      });

      if (cartItems.length) {
        cartItems[0].orderedItemCnt = ++cartItems[0].orderedItemCnt;
        cartItems[0].totalPrice = item.price * cartItems[0].orderedItemCnt;
      }
      else {
        $scope.order.push(product);
        $scope.itemsCnt = $scope.order.length;
      }
    };

    $scope.addItem = (item, index) => {
      item.orderedItemCnt = ++item.orderedItemCnt;
      item.totalPrice = item.item.price * item.orderedItemCnt;
    };

    $scope.subtractItem = function(item, $index) {
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
      var arr = [];

      for (var i = 0; i < $scope.order.length; i++) {
        var item = {
          orderedItemCnt: $scope.order[i].orderedItemCnt,
          totalPrice: $scope.order[i].totalPrice,
          itemId: $scope.order[i].itemId
        };
        arr.push(item);
      }
      Purchase.insert({
        time: new Date().format('yyyy/MM/dd a/p HH:mm:ss'),
        sale: arr
      });
      window.alert("Total Price : " + $scope.getSum());
      $scope.order = [];
    };

    $scope.clearOrder = () => {
      $scope.order = [];
    };

    $scope.barcodeInput = () => {
      $scope.add(Menu.findOne({
        barcode: ($scope.barcode.productBarcode).trim()
      }));
      $scope.barcode.productBarcode = '';
    };


  }
]);
