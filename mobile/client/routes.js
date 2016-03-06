angular.module("suji").run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      $state.go("login");
    }
  });
}]);

angular.module('suji').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('root', {
          views: {
            '': {
              template: '<div ui-view=""></div>'
            },
            'toolbar': {
              controller: 'ToolbarCtrl',
              templateUrl: 'client/toolbar/views/toolbar.ng.html'
            }
          }
        })
        .state('home', {
          parent: 'root',
          url: '/'
        });

    $urlRouterProvider.otherwise("/");
  }
]);


