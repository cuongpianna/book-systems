var usersController = app.controller('usersController',['$scope','$http','UserCRUDService',function($scope,$http,UserCRUDService){
    $scope.msg = 'leu leu';
    $scope.users = [];
    $scope.offset = 1;
    $scope.range = [];
    $scope.lastpage = 1;
    $scope.limit = 5;
    
    var url = 'http://127.0.0.1:5000/users';
    
    //get all users
    $http.get(url).success(function(results){
        console.log(results);
        $scope.users = results;
        
    }).error(function(data){console.log(data);});
    
    //function to get all users
    $scope.getAllUsers = function(offset,limit){
        if (offset === undefined){
            offset = '1';
        }
        if (limit === undefined){
            limit = '5';
        }
        
        $http.get('http://127.0.0.1:5000/users' + '?offset=' + offset + '&limit=' + limit)
            .success(function(results){
                console.log(results.data[0]);
                $scope.users = results.data[0];
                $scope.offset = results.offset;
                $scope.lastpage = results.last_page;
                console.log(results.offset);
            
                var pages = [];
                for (var i = 1; i <= results.last_page; i++) {
                    pages.push(i);
                }
                $scope.range = pages;
            })
            .error(function(data){console.log(data);});
    }
    
    //add users
    $scope.addUser = function(){
        var f = document.getElementById('avartar').files[0], r = new FileReader();
        r.onloadend = function(e){
            var data = e.target.result;
        }
        var ss = r.readAsBinaryString(f);
        console.log(f);
        UserCRUDService.addUser($scope.user.username,$scope.user.email,$scope.user.password, f);
        //$scope.info = "New user added successfully!";
        $scope.getAllUsers();
    }
    
    //delete user
    $scope.deleteUser = function(id){
        UserCRUDService.deleteUser(id);
        $scope.getAllUsers();
    }
    
}]);

app.directive('userPagi', function(){
   return {
      restrict: 'E',
      templateUrl: 'app/components/users/s.html',
      replace: true
   };
});