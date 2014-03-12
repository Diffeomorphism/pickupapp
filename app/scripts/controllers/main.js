'use strict';

//Main controller for page


  
app.controller('MainCtrl', function ($scope, $location) {
	$scope.selections = {1: true, 3: true, 8: true};

    $scope.test = function() {
      $location.path('/games');

    }
    


  });

app.controller('HomeCtrl', function($scope) {
	$scope.userid = 2;
  });

app.controller('GamesCtrl', function($scope, $http, Game) {
	
	$scope.loaded = false;
	$scope.error = false;

	$http({method: 'GET', url: 'http://localhost:5000/api/games/'}).success(function(data) {
		console.log(data);
	});

	//Game.get({id: 1}, function(data) {
	//	console.log(data);
	//})

	/*$http({method: 'GET', url: 'data/games.json'}).success(function(data) {
		$scope.loaded = true;
		$scope.games = data;
	}).error(function(data) {
		$scope.loaded = true;
		$scope.error = true;
	});*/



	/* Ignore this, but don't delete it! It may be useful in the future.

	$scope.submit = function() {
		
		 



		Game.query({foo: 'bar'}, function() {
			console.log('success');
		})

		Game.get({id: 3, foo: 'bar'}, function() {
			console.log('yay');
		})

		Game.update({id: 3, foo: 'bar'}, function() {
			console.log('success');
		}, function() {
			console.log('you phailed d00d');
		})

		
	}
	*/
});

app.controller('GameIDCtrl', function($scope, $routeParams) {
    $scope.game = {};
    $scope.game.id = $routeParams.id;
});

app.controller('newGameCtrl', function($scope) {
       $scope.submitForm=function(){
          console.log($scope.newGame)
       }
       $scope.checkParticipants = function() {
          alert($scope.participants)
       }
       $scope.games = [
       {sport: 'Soccer'},
       {sport: 'Basketball'},
       {sport: 'Football'},
       {sport: 'Badminton'} 
       ]

       $scope.location = [
       {name: 'SPAC'},
       {name: 'Blom'},
       {name: 'Patten'},
       {name: 'Deering'},
       {name: 'Lake Side Fields'}
       ]

  });