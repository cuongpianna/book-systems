var app = angular.module("app", ['ngRoute','ngResource']);
app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";	
});