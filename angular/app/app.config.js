app.config(function($routeProvider){
    $routeProvider.when('/dashboard',{
        controller: 'homeController',
        templateUrl: 'app/components/home/home.html'
    })
    .when('/users',{
        templateUrl: 'app/components/users/users.html',
        controller: 'usersController',
    })
});
