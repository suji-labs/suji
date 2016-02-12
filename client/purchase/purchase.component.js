/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('purchase', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/purchase/purchase.html',
        controllerAs: 'purchase'
    }
});