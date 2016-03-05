angular.module("suji").controller("purchaseCtrl", ['$scope', '$meteor',
    function($scope, $meteor) {

        $scope.now = new Date();

        $scope.sort = {
            time: -1
        };

        var handler = $scope.subscribe('purchase', function () {
            var query = {};
            var sort = { sort: $scope.getReactively('sort')};
            return [query, sort]
        });

        $scope.helpers({
            purchaseList: () => {
                if (handler.ready()) {
                    return Purchase.find({}, {sort: $scope.sort}).fetch();
                }
            }
        });

        $scope.receiptModal = (item) => {
            var totalCnt = 0,
                totalPrice = 0;
            var str = '<style>th{text-align: center}</style><table class="table" style="text-align: center">';
            str += '<thead><tr><th>Name</th><th>Quantity</th><th>Total Price</th></tr></thead>';
            for (var i = 0; i < item.sale.length; i++) {
                str += '<tr><td>' + item.sale[i].itemId + '</td><td>' + item.sale[i].orderedItemCnt + '</td><td>' + item.sale[i].totalPrice + '</td></tr>';
                totalCnt += item.sale[i].orderedItemCnt;
                totalPrice += item.sale[i].totalPrice;
            }
            str += '<tr><td>TOTAL</td><td>' + totalCnt + '</td><td>' + totalPrice + '</td></tr></table>';
            bootbox.dialog({
                title: "Receipt",
                message: str,
                buttons: {
                    success: {
                        label: "OK",
                        className: "btn-success"
                    }
                }
            });
        };

        $scope.removeItem = (item) => {
            Purchase.remove({
                _id: item._id
            });
        };

    }
]);
