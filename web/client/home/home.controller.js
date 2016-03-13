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
        console.log("Logout");
        window.alert("Logout Success");
    };

    $scope.signIn = (password) => {
        $scope.passwordInput = '';
        $('#loginModal').modal('hide');
        Meteor.loginWithPassword('admin', password);

        console.log(Accounts.user());
        if (Meteor.userId() != null) {
            console.log("Login");
            window.alert("Login Success");
        }
        else {
            console.log("Login Failed");
            window.alert("Login Failed");
        }
    };
});