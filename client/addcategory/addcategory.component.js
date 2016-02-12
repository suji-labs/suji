/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('addcategory', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/addcategory/addcategory.html',
        controllerAs: 'addcategory'
    }
});