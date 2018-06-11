var usersController = app.controller('usersController',['$scope','$http','UserCRUDService',function($scope,$http,UserCRUDService){
    $scope.msg = 'leu leu';
    $scope.users = [];
    var url = 'http://127.0.0.1:5000/users';
    $http.get(url).success(function(results){
        console.log(results);
        $scope.users = results;
        console.log(results);
    }).error(function(data){console.log(data);});
    
    $scope.addUser = function(){
        UserCRUDService.addUser($scope.user.username,$scope.user.email,$scope.user.password, $scope.user.avartar).success(function(){
            console.log('ok');
        }).error(function(data){console.log(data)});
    }
    
}]);
