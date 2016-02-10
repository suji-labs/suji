'use strict'

angular.module('sujiAngularApp')
.controller('ProductsListCtrl', function($scope) {
  $scope.page = 1;
  $scope.perPage = 3;
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1';
  
  $scope.helpers({
    products: function() {
      return Products.find({}, {
        sort: $scope.getReactively('sort') 
      });
    },
    productsCount: function() {
      return Counts.get('numberOfProducts');
    }
  });
                  
  $scope.subscribe('products', function() {
    return [{
      sort: $scope.getReactively('sort'),
      limit: parseInt($scope.getReactively('perPage')),
      skip: ((parseInt($scope.getReactively('page'))) - 1) * (parseInt($scope.getReactively('perPage')))
    }, $scope.getReactively('search')];
  });

  $scope.save = function() {
    if ($scope.form.$valid) {
      Products.insert($scope.newProduct);
      $scope.newProduct = undefined;
    }
  };
                  
  $scope.remove = function(product) {
    Products.remove({_id:product.id});
  };
                  
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
                  
  return $scope.$watch('orderProperty', function() {
    if ($scope.orderProperty) {
      $scope.sort = {
        name_sort: parseInt($scope.orderProperty)
      };
    }
  });
});