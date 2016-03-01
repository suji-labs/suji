angular.module("suji").controller("categoryCtrl", ['$scope', '$meteor', '$timeout',
  function($scope, $meteor, $timeout) {
    $scope.sort = {
      createdAt: -1
    };
    $scope.now = new Date();

    $meteor.autorun($scope, function() {
      $meteor.subscribe('category', {}, $scope.getReactively('search')).then(function() {
        console.log('Got category');
      });
    });

    $scope.categoryList = $meteor.collection(function() {
      return Category.find({}, {
        sort: $scope.getReactively('sort')
      });
    });

    $scope.add = function(category) {
      $meteor.call('add', category);
    };

    $scope.remove = function(category) {
      $meteor.call('remove', category);
    };

    $scope.update = function(category) {
      $meteor.call('update', category);
    };

    $scope.addCategory = () => {
      Category.insert({
        categoryName: $scope.newCategory
      });
      $scope.newCategory = null;
    };

    $scope.removeCategory = (item) => {
      Category.remove({
        _id: item._id
      });
    };


    ///
    $scope.loadStuff = function() {
      $scope.promise = $timeout(function() {
        // loading
      }, 2000);
    }
  }
]);
