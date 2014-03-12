angular.module('pickupappApp')
	.directive('game', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/directive-game.html',
			scope: {
				details: '=',
			},
			controller: function($scope, $http) {
				$scope.commentsVisible = false;
				$scope.commentsLoaded = false;

				$scope.getDetails = function() {
					$scope.commentsVisible = !$scope.commentsVisible;
					$(".details_" + $scope.details.id).slideToggle();

					//Dummy comment data
					$scope.commentsLoaded = true;
					$scope.comments = [
						{name: 'Alex McPerson', message: 'd00d let us do tha sport'},
						{name: 'Ben tha kool guy', message: 'ya lets go'},
						{name: 'Mike Awesome', message: 'i can bench 200 w my pinky finger'}
					];

				}
			}
	}
})
	.directive('sportsSelector', function() {
		return {
			restrict: 'E',
			templateUrl: 'views/directive-sports-selector.html',
			scope: {
				model: '=',
			},
			controller: function($scope) {
				$scope.sports = [1,2,3,4,5,6,7,8,9,10,11,12];
				
			}
		}
	});