/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('manage', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/manage/manage.html',
        controllerAs: 'manageController'
    }
});