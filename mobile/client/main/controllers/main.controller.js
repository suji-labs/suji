angular.module("suji").controller("appCtrl", ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog',
    function($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
        $scope.tabList = [{
            icon: 'social:ic_person_24px',
            title: 'POS',
            href: 'pos'
        }, {
            icon: 'social:ic_person_24px',
            title: 'Bell',
            href: 'bell'
        }, {
            icon: 'social:ic_person_24px',
            title: 'Purchase',
            href: 'purchase'
        }];

        $scope.adminTabList = [{
            icon: 'social:ic_person_24px',
            title: 'Menu',
            href: 'menu'
        }, {
            icon: 'social:ic_person_24px',
            title: 'Category',
            href: 'category'
        }, {
            icon: 'social:ic_person_24px',
            title: 'Employee',
            href: 'employee'
        }];

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.showListBottomSheet = function($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                controller: 'ListBottomSheetCtrl',
                templateUrl: 'client/main/views/bottom.sheet.ng.html',
                targetEvent: $event
            }).then(function(clickedItem) {
                $scope.alert = clickedItem + ' clicked!';
            });
        };
    }
]);

angular.module("suji").controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.listItemClick = function($index) {
        $mdBottomSheet.hide();
    };
});

angular.module("suji").directive('userAvatar', function() {
    return {
        replace: true,
        templateUrl: 'client/main/views/avatar.ng.html'
    };
});