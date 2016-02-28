angular.module("suji").controller("ForgotPasswordCtrl", ['$meteor', '$state',
  function ($meteor, $state) {
    var vm = this;

    vm.credentials = {
      email: ''
    };

    vm.error = '';

    vm.reset = function () {
      $meteor.forgotPassword(vm.credentials).then(
        function () {
           $state.go('login');
        },
        function (err) {
          vm.error = 'Error sending forgot password: ' + err;
        }
      );
    };
  }
]);
