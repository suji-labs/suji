/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('HomeController', function ($scope, $reactive, $state) {
    $reactive(this).attach($scope);

    var storeHandler = this.subscribe('store');
    $scope.userID = '';

    $("#login").click(function () {
        $('#loginModal').modal('show');
    });

    $("#logout").click(function () {
        Meteor.logout();
        $state.go('homepage');
        console.log("Logout");
        window.alert("Logout Success");
    });

    $scope.helpers({
        storeList: () => {
            if (storeHandler.ready()) {
                return Store.find({}).count();
            }
        }
    });

    $scope.addStore = () => {
        Accounts.createUser({
            username: $scope.STORE_NAME,
            password: $scope.PASSWORD
        });

        Store.insert({
            name: $scope.STORE_NAME,
            brn: $scope.BRN,
            address: $scope.ADDRESS,
            representative: $scope.REPRESENTATIVE,
            tel: $scope.TEL
        });

        userID = $scope.STORE_NAME;
        $scope.STORE_NAME = '';
        $scope.BRN = '';
        $scope.ADDRESS = '';
        $scope.REPRESENTATIVE = '';
        $scope.TEL = '';
        $scope.PASSWORD = '';
    };

    $scope.signIn = (password) => {
        $scope.passwordInput = '';
        $('#loginModal').modal('hide');
        Meteor.loginWithPassword(userID, password);
        console.log("Login");
        window.alert("Login Success");
    };
});