angular.module("suji").controller("LoginCtrl", ['$meteor', '$state',
  function ($meteor, $state) {
    var vm = this;

    vm.credentials = {
      username: '',
      password: ''
    };

    vm.error = '';

    vm.login = function () {
      $meteor.loginWithPassword(vm.credentials.username, vm.credentials.password).then(
        function () {
          $state.go('home');
        },
        function (err) {
          vm.error = 'Login error - ' + err;
        }
      );
    };
  }
]);
