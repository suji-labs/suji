angular.module("suji").controller("appCtrl", ['$scope', '$mdBottomSheet', '$mdSidenav', '$mdDialog',
    function($scope, $mdBottomSheet, $mdSidenav, $mdDialog) {
        $scope.tabList = [{
            icon: 'av:ic_web_24px',
            title: 'POS',
            href: 'pos'
        }, {
            icon: 'social:ic_notifications_24px',
            title: 'Bell',
            href: 'bell'
        }, {
            icon: 'maps:ic_local_atm_24px',
            title: 'Purchase',
            href: 'purchase'
        }];

        $scope.adminTabList = [{
            icon: 'action:ic_assignment_24px',
            title: 'Menu',
            href: 'menu'
        }, {
            icon: 'av:ic_library_books_24px',
            title: 'Category',
            href: 'category'
        }, {
            icon: 'social:ic_group_24px',
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
        
        $scope.sidenavClose = function(){
            $mdSidenav('left').close();
        }
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
        template : '<img src="logo.png" style="width:64px;height:64px;"/>'
    };
});