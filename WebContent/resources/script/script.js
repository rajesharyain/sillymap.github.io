var app = angular.module('ngRoutingDemo', ['ngRoute']);

// configure our routes
app.config(function($routeProvider,$locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'login.html',
            controller  : 'loginController'
        })

        // route for the about page
        .when('/student/:username', {
            templateUrl : 'student.html',
            controller  : 'studentController'
        })
        
        $locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
app.controller('loginController', function($scope,$location) {
    // create a message to display in our view
	//var username = 'rajesh'; 
	$scope.authenticate = function(username){
		alert("user: "+username)
		$location.path('/student/' + username);
		
	}
	
});

app.controller('studentController', function($scope,$routeParams) {

    $scope.username = $routeParams.username;
});

