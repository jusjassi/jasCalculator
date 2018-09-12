 var app = angular.module("jasApplication", []);

    app.service("firstService", function(){
        this.sum =  function(num1, num2){
            return (num1)-(-num2);
        };

        this.subtraction = function(num1, num2){
            if(num1 > num2){
                return num1-num2;
            }
            else{
                return num2 - num1;
            }
        };

        this.multiplication = function(num1, num2){
            return num1 * num2;
        }

        this.division = function(num1, num2){
            if(num2==0){
                alert("Invalid Operation: dividend can never be zero");
            }
            else {
                return num1/num2;
            }
        }
    });
	
	
    app.controller("jasController", function($scope, firstService){
        $scope.add = function(){
			$scope.myInputVal='';
            $scope.output = firstService.sum($scope.one, $scope.two);
        };

        $scope.sub = function(){
			$scope.myInputVal='';
            $scope.output = firstService.subtraction($scope.one, $scope.two);
        };

        $scope.mul = function(){
			$scope.myInputVal='';
            $scope.output = firstService.multiplication($scope.one, $scope.two);
        };

        $scope.divi = function(){
			$scope.myInputVal='';
            $scope.output = firstService.division($scope.one, $scope.two);
        };
        $scope.reset = function(){
          $scope.one="";
          $scope.two="";
          $scope.output="";
		  $scope.myInputVal='';
        }
			
    });	
	