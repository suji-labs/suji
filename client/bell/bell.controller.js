/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('bellController', function ($scope, $reactive) {
    $reactive(this).attach($scope);
    $scope.now = new Date();

    this.bellID = {
        id: 1
    };

    this.subscribe('bell', () => {
        return [
            {
                sort: this.getReactively('bellID')
            }
        ]
    });

    $scope.helpers({
        bellList: () => {
            return Bell.find({}, {sort: this.getReactively('bellID')});
        }
    });

    $scope.addBell = () => {
        Bell.insert({
            bellID: $scope.newBell.id
        });
        $scope.newBell = null;
    };

    $scope.callBell = (item) => {
        window.alert(item.bellID + "Call");
    };

    $scope.removeBell = (item) => {
        Bell.remove({_id: item._id});
    };
});