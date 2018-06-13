app.service('UserCRUDService',['$http', function($http){
    this.addUser = function(username,email,password,avartar){
        var fd = new FormData();
        fd.append('username',username);
        fd.append('email',email);
        fd.append('password',password);
        fd.append('avartar',avartar);
        $http.post('http://127.0.0.1:5000/users',fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                   }).success(function(){console.log('ok')})
                    .error(function(data){
                    console.log(data);  
        });
    }
}]);