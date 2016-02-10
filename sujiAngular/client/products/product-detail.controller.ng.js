'use strict'

angular.module('sujiAngularApp')
.controller('ProductDetailCtrl', function($scope, $stateParams) {
  
  $scope.helpers({
    product: function() {
      return Products.findOne({ _id: $stateParams.productId }); 
    }
  });
  
  $scope.subscribe('products');
  
  $scope.save = function() {
    if($scope.form.$valid) {
      delete $scope.product._id;
      Products.update({
        _id: $stateParams.productId
      }, {
        $set: $scope.product
      }, function(error) {
        if(error) {
          console.log('Unable to update the product'); 
        } else {
          console.log('Done!');
        }
      });
    }
  };
        
  $scope.reset = function() {
    $scope.product.reset();
  };
});