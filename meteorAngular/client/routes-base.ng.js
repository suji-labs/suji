'use strict';

angular.module('meteorAngularApp')

.config(function($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/login');
})

.run(['$rootScope', '$location', '$cookieStore', '$http',
  function($rootScope, $location, $cookieStore, $http) {
    // keep user logged in after page refresh
    $rootScope.globals = $cookieStore.get('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }

    $rootScope.$on('$locationChangeStart', function(event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
      var loggedIn = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');
      }
    });
  }
]);


// .run(['$rootScope', '$state', function($rootScope, $state) {
//   $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
//     switch(error) {
//       case 'AUTH_REQUIRED':
//       case 'FORBIDDEN':
//       case 'UNAUTHORIZED':
//         $state.go('main');
//         break;
//     }
//   });
// }]);