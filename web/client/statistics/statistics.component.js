angular.module('suji-mr').directive('statistics', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/statistics/statistics.html',
        controllerAs: 'StatisticsController'
    }
});
