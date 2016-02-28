/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('category', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/category/category.html',
        controllerAs: 'CategoryController'
    }
});