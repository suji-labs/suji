/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('bell', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/bell/bell.html',
        controllerAs: 'bellController'
    }
});