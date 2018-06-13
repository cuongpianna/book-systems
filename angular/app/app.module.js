var app = angular.module("app", ['ngRoute','ngResource','ngFileUpload']);
app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";	
});