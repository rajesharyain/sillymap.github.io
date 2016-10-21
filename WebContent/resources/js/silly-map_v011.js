defaults = {
            "mapWidth":"100%",
            "mapHeight":"300px"
}

var sillyMapApp = angular.module('sillyMap', []);



sillyMapApp.controller("sillyMapController", function($scope, $window) {
	$scope.initMap= "hello map i am here";
});

sillyMapApp.directive('sillyMap',function($parse,$compile){
	
	return {
		restrict: "AE",
		controller: 'sillyMapController',
		scope:{
			mapHeight:"@"
		},
		link:function(scope,attrs,element){
			 
			 if(typeof scope.mapHeight !='undefined')
			 {
				 defaults.mapHeight = scope.mapHeight;
			 }

			console.log("defaults.mapHeight: "+defaults.mapHeight)
			
			var el = document.createElement("div");
			el.style.width = defaults.mapWidth;
			el.style.height = defaults.mapHeight;
			angular.element(el);
			console.log(el)
			map = new google.maps.Map(el, {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
			});
			element.$$element.append(el);				
			
			//initlizeMap: initlizeMap()
			//console.log(element.valueOf(attrs.mapCenter))
		}
	}
	
	
	/*function initlizeMap () {
		map = new google.maps.Map(document.getElementById('map'), {
		     center: {lat: -34.397, lng: 150.644},
		     zoom: 8
		});
	}*/
	
})

