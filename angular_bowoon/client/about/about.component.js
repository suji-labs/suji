/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('about', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/about/about.html',
        controllerAs: 'about'
    }
});