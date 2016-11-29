'use strict'

var controllers = angular.module('controllers',[]);

controllers.controller('homeController', ['$scope','$http','$rootScope', function($scope,$http,$rootScope){
	// $rootScope.isCollapsed = true;

}]);

controllers.controller('eduController', ['$scope','$http', function($scope,$http){
	$http.get('data/education.json').success(function(data){
		$scope.eduInfo = data;
	}).error(function(data,status){
			console.log(data);
			alert(data + " " + status);
	});


}]);

controllers.controller('expController', ['$scope','$http', function($scope,$http){
	// $http.get('data/experience.json').success(function(data){
		// $scope.expDetails = data;
	// }).error(function(data,status){
			// alert(data + " " + status);
	// });


}]);

controllers.controller('contactController', ['$scope','$http', function($scope,$http){
	$http.get('data/contact.json').success(function(data){
		$scope.contactInfo = data;
	}).error(function(data,status){
			alert(data + " " + status);
	});
	$scope.contact = {};
	
	$scope.mailme = function(){
		var postdata = serialize($scope.contact);
		var config ={
			headers : {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
			}
		};
		
		$http.post('mail.php', postdata, config).success(function(data){
			alert(data);
		}).error(function(data,status){
			alert('Problem in contacting server');
		});
	}
	
	var serialize = function(obj, prefix) {
		var str = [];
		for(var p in obj) {
		if (obj.hasOwnProperty(p)) {
		  var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
		  str.push(typeof v == "object" ?
			serialize(v, k) :
			encodeURIComponent(k) + "=" + encodeURIComponent(v));
		}
		}
		return str.join("&");
	};

}]);