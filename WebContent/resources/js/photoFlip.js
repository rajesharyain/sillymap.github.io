var photoApp = angular.module('photoApp', []);

photoApp.directive('fileModel', [ '$parse', function($parse) {

	return {
		restrict : 'A',
		link : function(scope, element, attrs) {
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;

			element.bind('change', function() {
				scope.$apply(function() {
					modelSetter(scope, element[0].files[0]);
					
				});
			});
		}
	};
} ]);

photoApp.service('fileUpload', [ '$http', function($http) {
	this.uploadFileToUrl = function(file, uploadUrl) {
		var fd = new FormData();
		fd.append('file', file);

		$http.post(uploadUrl, fd, {
			transformRequest : angular.identity,
			headers : {
				'Content-Type' : undefined
			}
		})

		.success(function() {
		})

		.error(function() {
		});
	}
} ]);

photoApp.controller('photoFlipController', [ '$scope', 'fileUpload',
		function($scope, fileUpload) {
			$scope.uploadFile = function() {
				var file = $scope.fileInput;
				
				console.log('file is ');
				console.dir(file);
				//$scope.filePath = ;
				var uploadUrl = "fileUpload";
				fileUpload.uploadFileToUrl(file, uploadUrl);
			};
		} ]);
