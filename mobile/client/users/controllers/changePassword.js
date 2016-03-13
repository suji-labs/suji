angular.module("suji").controller("ChangePasswordCtrl", ['$meteor', '$state',
  function ($meteor, $state) {
    var vm = this;

    vm.credentials = {
      old: '',
      new: ''
    };

    vm.error = '';

    vm.changePassword = function () {
      $meteor.changePassword(vm.credentials.old, vm.credentials.new).then(
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
