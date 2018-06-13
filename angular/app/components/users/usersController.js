var usersController = app.controller('usersController',['$scope','$http','UserCRUDService',function($scope,$http,UserCRUDService){
    $scope.msg = 'leu leu';
    $scope.users = [];
    var url = 'http://127.0.0.1:5000/users';
    
    $http.get(url).success(function(results){
        console.log(results);
        $scope.users = results;
        
    }).error(function(data){console.log(data);});
    
    $scope.addUser = function(){
        var f = document.getElementById('avartar').files[0], r = new FileReader();
        r.onloadend = function(e){
            var data = e.target.result;
        }
        var ss = r.readAsBinaryString(f);
        console.log(f);
        UserCRUDService.addUser($scope.user.username,$scope.user.email,$scope.user.password, f)
    }
    
}]);
