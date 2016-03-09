/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('HomeController', function ($scope, $reactive) {
    $reactive(this).attach($scope);

    var storeHandler = this.subscribe('store');

    $scope.helpers({
        storeList: () => {
            if (storeHandler.ready()) {
                return Store.find({}).count();
            }
        }
    });

    $scope.addStore = () => {
        Store.insert({
            name: $scope.STORE_NAME,
            brn: $scope.BRN,
            address: $scope.ADDRESS,
            representative: $scope.REPRESENTATIVE,
            tel: $scope.TEL
        });
    };
});