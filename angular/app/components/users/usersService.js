app.service('UserCRUDService',['$http', function($http){
    this.addUser = function(username,email,password,avartar){
        return $http({
           method: 'POST',
           url: 'http://127.0.0.1:5000/users',
           headers: {
                'Content-Type': 'application/json'
           },
           data:{
                username: username,
                email: email,
                password: password,
                avartar: avartar
           }
        });
    }
}]);