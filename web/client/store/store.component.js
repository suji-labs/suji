/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('store', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/store/store.html',
        controllerAs: 'StoreController'
    }
});