app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/admin')
    
    $stateProvider
        .state('admin',{
        url: '/admin',
        controller: 'homeController',
        templateUrl: 'app/components/home/home.html'
    })
        .state('users',{
        url: '/admin/users',
        templateUrl: 'app/components/users/users.html',
        controller: 'usersController',
    })
});
