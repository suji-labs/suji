angular.module("suji").controller("ResetPasswordCtrl", ['$meteor', '$state','$stateParams',
  function ($meteor, $state, $stateParams) {
    var vm = this;

    vm.credentials = {
      new: ''
    };

    vm.error = '';

    vm.resetPassword = function () {
      console.log('Token: ' + $stateParams.token);
      $meteor.resetPassword($stateParams.token, vm.credentials.new).then(
        function () {
          $state.go('home');
        },
        function (err) {
          vm.error = 'Error changing password: ' + err;
        }
      );
    };
  }
]);
