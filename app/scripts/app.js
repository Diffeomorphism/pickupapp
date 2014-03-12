'use strict';

angular.module('pickupappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($httpProvider, $routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'HomeCtrl',
          templateUrl: 'views/main.html',
        })
        .when('/add', {
          templateUrl: 'views/create-game.html',
        })
        .when('/games', {
          templateUrl: 'views/games.html',
          controller: 'GamesCtrl'
        })
        .when('/games/:id', {
          templateUrl: 'views/gameDetails.html',
          controller: 'GameIDCtrl',
        })
        .when('/newGame', {
          templateUrl: 'views/newGame.html',
          controller: 'newGameCtrl',
        })
        .otherwise({
          redirectTo: '/'
        });

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });

var app = angular.module('pickupappApp');

//Angular resources for retrieving models
//Use query for searches without passing in an ID!

var domain = 'http://127.0.0.1\:5000';

app.factory('User', ['$resource', '$http', function($resource, $http) {
  return $resource(domain + '/user/:id', {id: '@id'},
  {
    'update': {method: 'PUT'},
    'test': {method: 'JSONP'},
  });
}]);

app.factory('Game', ['$resource', function($resource) {
  return $resource(domain + '/api/games/:id', {id: '@id'},
  {
    'update': {method: 'PUT'}
  });
}]);