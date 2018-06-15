var app = angular.module("app", ['ui.router','ngResource','ngFileUpload','angularUtils.directives.dirPagination']);
app.controller("HelloController", function($scope) {
  $scope.message = "Hello, AngularJS";	
});