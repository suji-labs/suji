/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('PurchaseController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();

    this.sort = {
        time: -1
    };

    this.subscribe('store');
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
        var totalCnt = 0, totalPrice = 0;
        var receiptTitle = '<table>' +
            '<tr><td><label>[Store] : ' + Store.findOne().name + '</label></td></tr>' +
            '<tr><td><label>[B/N] : ' + Store.findOne().brn + '</label></td></tr>' +
            '<tr><td><label>[Address] : ' + Store.findOne().address + '</label></td></tr>' +
            '<tr><td><label>[Representative] : ' + Store.findOne().representative + '</label></td></tr>' +
            '<tr><td><label>[Tel] : ' + Store.findOne().tel + '</label></td></tr>' +
            '</table><br>';
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
            message: receiptTitle + str,
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