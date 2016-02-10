'use strict'

angular.module('sujiAngularApp')
.config(function($stateProvider) {
  $stateProvider
  .state('products-list', {
    url: '/products',
    templateUrl: 'client/products/products-list.view.ng.html',
    controller: 'ProductsListCtrl'
  })
  .state('product-detail', {
    url: '/products/:productId',
    templateUrl: 'client/products/product-detail.view.ng.html',
    controller: 'ProductDetailCtrl'
  });
});