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
            return Bell.find({}, {sort: {bellID: 1}});
        }
    });

    $scope.addBell = () => {
        switch ($scope.newBell.id)
        {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if(Bell.findOne({bellID: $scope.newBell.id})) {
                    window.alert($scope.newBell.id + '번 진동벨은 이미 등록되어 있습니다.');
                    break;
                }
                else {
                    Bell.insert({
                        bellID: $scope.newBell.id
                    });
                    break;
                }
            default:
                window.alert('진동벨 번호(1~9)를 입력해 주세요.');
        }

        $scope.newBell = null;
    };

    $scope.callBell = (item) => {
        var code = 'S1'+item.bellID;

        Meteor.call('serialPort', code);

        window.alert("Called " + code);
    };

    $scope.stopBell = (item) => {
        var code = 'S0'+item.bellID;

        Meteor.call('serialPort', code);

        window.alert("Stopped " + code);
    };

    $scope.removeBell = (item) => {
        Bell.remove({_id: item._id});
    };
});