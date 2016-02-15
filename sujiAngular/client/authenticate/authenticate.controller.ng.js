'use strict'

angular.module('sujiAngularApp')
.controller('AuthenticateCtrl', function($scope) {
  // For using jquery function in Angular
  // created by njir on 2016.02.12
  $(function() {
      $("#newUser").click(function() {
          $("h1").text("Registration");
          $(".logo").css({
              "width": "120px",
              "height": "120px",
              "top": "10px"
          });
          $("#login-form").fadeOut(200);
          $("#registration-form").delay(300).fadeIn(500);
          $(".other-options").fadeOut(200);
      });

      $("#signup-btn,#getpass-btn").click(function() {
          $("h1").text("Log in");
          $(".logo").css({
              "width": "150px",
              "height": "150px",
              "top": "30px"
          });

          $("#registration-form,#fpass-form").fadeOut(200);
          $("#login-form").delay(300).fadeIn(500);
          $(".other-options").fadeIn(300);
      });

      $("#fPass").click(function() {
          $("h1").text("Forgotten password");
          $(".logo").css({
              "width": "190px",
              "height": "190px",
              "top": "40px"
          });

          $("#login-form").fadeOut(200);
          $("#fpass-form").delay(300).fadeIn(500);
          $(".other-options").fadeOut(200);
      });
  }); //Links to jsfiddle must be accompanied by code
  
  
  $scope.viewName = 'Authenticate';
});