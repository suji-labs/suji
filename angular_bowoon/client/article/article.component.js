/**
 * Created by BoWoon on 2016-02-12.
 */

angular.module('suji-mr').directive('article', function () {
    return {
        restrict: 'E',
        templateUrl: 'client/article/article.html',
        controllerAs: 'article'
    }
});