defaults = {
            "mapWidth":"100%",
            "mapHeight":"300px"
}

angular.module('sillyMap', []);

(function(){
	'use strict';
	var sillyMapController = function($scope, $window) {
		$scope.initMap= "hello map i am here";
	};//controller ends here
	sillyMapController.$inject = ['$scope', '$window'];
	angular.module('sillyMap').controller('sillyMapController', sillyMapController);
})();

//directive

(function(){
	
	var sillyMap = function($parse,$compile){
	
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
	
	};// End of directive
	
	sillyMap.$inject = ['$parse', '$compile'];
	angular.module('sillyMap').directive('sillyMap', sillyMap);
})();
