angular.module("suji").controller("bellCtrl", ['$scope', '$meteor', '$mdDialog',
  function($scope, $meteor, $mdDialog) {
    $scope.bellID = {
      id: 1
    };

    $scope.showAdd = function(ev) {
      $mdDialog.show({
          controller: DialogController,
          templateUrl: 'client/bell/views/add.bell.ng.html',
          targetEvent: ev,
        })
        .then(function(newBell) {
          console.log(newBell);
          switch (newBell.id) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
              if (Bell.findOne({
                  bellID: newBell.id
                })) {
                window.alert(newBell.id + '번 진동벨은 이미 등록되어 있습니다.');
                break;
              }
              else {
                Bell.insert({
                  bellID: newBell.id
                });
                break;
              }
            default:
              window.alert('진동벨 번호(1~9)를 입력해 주세요.');
          }

          $scope.newBell = null;

        });
    };
     $scope.callBell = (item) => {
        var code = 'S1'+item.bellID;

        Meteor.call('serialPort', code);

        window.alert("Called the bell number" + item.bellID);
    };

    $scope.stopBell = (item) => {
        var code = 'S0'+item.bellID;

        Meteor.call('serialPort', code);

        window.alert("Stopped the bell number " + item.bellID);
    };

    $scope.removeBell = (item) => {
        Bell.remove({_id: item._id});
    };
    
    $scope.sort = {
      createdAt: -1
    };
    $scope.now = new Date();

    $meteor.autorun($scope, function() {
      $meteor.subscribe('bell', {}, $scope.getReactively('search')).then(function() {
        console.log('Got bell');
      });
    });

    $scope.bellList = $meteor.collection(function() {
        return Bell.find({}, {sort: {bellID: 1}});
    });

    $scope.reset = function() {
      $scope.newBell = {
        id: "",
      }
    };
  }
]);

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
};
