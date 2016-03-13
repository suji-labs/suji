/**
 * Created by 보운 on 2016-02-12.
 */

angular.module('suji-mr').controller('HomeController', function ($scope, $reactive, $state) {
    $reactive(this).attach($scope);

    var storeHandler = this.subscribe('store');

    $scope.helpers({
        storeList: () => {
            if (storeHandler.ready()) {
                return Store.find({}).count();
            }
        }
    });

    $scope.meteorUserID = () => {
        return Meteor.userId();
    };

    $scope.addStore = () => {
        Accounts.createUser({
            username: 'admin',
            password: $scope.PASSWORD
        });

        Store.insert({
            name: $scope.STORE_NAME,
            brn: $scope.BRN,
            address: $scope.ADDRESS,
            representative: $scope.REPRESENTATIVE,
            tel: $scope.TEL
        });

        $scope.STORE_NAME = '';
        $scope.BRN = '';
        $scope.ADDRESS = '';
        $scope.REPRESENTATIVE = '';
        $scope.TEL = '';
        $scope.PASSWORD = '';
    };

    $scope.login = () => {
        $scope.passwordInput = '';
        $('#loginModal').modal('show');
    };

    $scope.logout = () => {
        Meteor.logout();
        $state.go('homepage');
        window.alert("Logout Success");
    };

    $scope.signIn = (password) => {
        $scope.passwordInput = '';
        $('#loginModal').modal('hide');
        Meteor.loginWithPassword('admin', password, function () {
            $scope.loginCheck();
        });
    };

    $scope.loginCheck = () => {
        if (Meteor.userId() != null) {
            window.alert("Login Success");
        }
        else {
            window.alert("Login Failed");
        }
    };
});