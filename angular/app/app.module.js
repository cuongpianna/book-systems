var app = angular.module("app", ['ngRoute','ngResource','ngFileUpload','angularUtils.directives.dirPagination']);
app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";	
});