/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('PurchaseController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();

    this.sort = {
        time: -1
    };

    this.subscribe('purchase', () => {
        return [
            {
                sort: this.getReactively('sort')
            }
        ]
    });

    $scope.helpers({
        purchaseList: () => {
            return Purchase.find({}, {sort: this.getReactively('sort')});
        }
    });

    $scope.receiptModal = (item) => {
        var str = '<table class="table">';
        str += '<tr><td>Name</td><td>Quantity</td><td>Total Price</td></tr>';
        for (var i = 0; i < item.sale.length; i++)
            str += '<tr><td>' + item.sale[i].itemId + '</td><td>' + item.sale[i].orderedItemCnt + '</td><td>' + item.sale[i].totalPrice + '</td></tr>';
        str += '</table>';
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
        Purchase.remove({_id: item._id});
    };
});