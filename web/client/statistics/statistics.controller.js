/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('StatisticsController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();

    this.sort = {
        time: -1
    };

    this.subscribe('statistics', () => {
        return [
            {
                sort: this.getReactively('sort')
            }
        ]
    });

    $scope.helpers({
        purchaseList: () => {
            return Purchase.find({}, {sort: this.getReactively('sort')});
        }
    });
});