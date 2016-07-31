var app = angular.module('mapApp', ['ngAnimate','angularMoment','ui.router','ui.bootstrap','ngResource','ngCookies','leaflet-directive']);

app.config(function($stateProvider,$urlRouterProvider) {  
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: '/views/login.html',
    controller: 'LoginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'views/signup.html',
    controller: 'SignUpCtrl'
  })
  
  .state('form', {
    url: '/form',
    templateUrl: 'views/form.html',
    controller: 'redditController'
  })
  
  .state('form.map', {
    url: '/map',
    templateUrl: 'views/form-map.html',
    controller: 'redditController'
  });

  $urlRouterProvider.otherwise('login');
  });

app.run(['$rootScope', 'Auth', function ($rootScope, Auth) {
    $rootScope.$on('$routeChangeStart', function (event) {

        if (!Auth.isLoggedIn()) {
            console.log('DENY');
            event.preventDefault();
            $state.go('login');
        }
        else {
            console.log('ALLOW');
            $state.go('form.map');
        }
    });
}]);


