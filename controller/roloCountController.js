var carboApp = angular.module('roloModule',[]);

carboApp.controller('RoloCount', function($scope){
 
	$scope.rolos = [];
    $scope.addRoloCount = function() {

		var meters = $scope.rolo.amount * $scope.rolo.size;
	
		$scope.rolo.valuemeter = $scope.rolo.valuepack / meters;

		$scope.rolos.push({brand: $scope.rolo.brand, amount:$scope.rolo.amount, size:$scope.rolo.size, valuepack: $scope.rolo.valuepack, valuemeter: $scope.rolo.valuemeter });
		
		$scope.rolo.brand = '';
		$scope.rolo.amount = '';
		$scope.rolo.size = '';
		$scope.rolo.valuepack = '';
		//$scope.rolo.valuemeter = '';
    };
	
	$scope.clearRolos = function() {
		$scope.rolos = [];
    };
	
	$scope.removeRolo = function(index){
		$scope.rolos.splice(index, 1);
	}
});