var usersController = app.controller('usersController',['$scope','$http',function($scope,$http){
    $scope.msg = 'leu leu';
    $scope.users = [];
    var url = 'http://127.0.0.1:5000/users';
    $http.get(url).success(function(results){
        $scope.users = results;
        console.log(results);
    });
    
    $scope.checkUncheckAll = function(){
       if($scope.checkall){
           $scope.checkall=true
       } else{
           $scope.checkall=false;
       }
    }
}]);
