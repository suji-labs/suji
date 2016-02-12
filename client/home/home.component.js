/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('home', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/home/home.html',
        controllerAs: 'homepage'
    }
});