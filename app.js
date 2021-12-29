var myApp = angular.module('myApp', []);


myApp.controller('MyController', ['$scope', function($scope) {
    $scope.name = 'Yana';
    $scope.lastname = 'Olik';
  
    $scope.alertFn = function() {
        
       if(this.name != 'Yana' || this.lastname != 'Olik') {
     
       alert('name or lastname incorrect!');

        } else {
    
            alert('Welcome!!!');
       
        }
             
    };
         
}]);


