app.service('UserCRUDService',['$http', function($http){
    this.addUser = function(username,email,password,avartar){
        var fd = new FormData();
        fd.append('username',username);
        fd.append('avartar',avartar);
        fd.append('email',email);
        fd.append('password',password);
        
        return $http({
               method: 'POST',
               url: 'http://127.0.0.1:5000/users',
               headers: {
                   transformRequest: angular.identity,
                    header: {'Content-Type': 'multipart/form-data'}
                        },
               data:fd
            });
    }
}]);