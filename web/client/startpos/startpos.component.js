/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('startpos', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/startpos/startpos.html',
        controllerAs: 'POSController'
    }
});