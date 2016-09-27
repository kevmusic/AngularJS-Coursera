(function () {
    'use strict';
    
    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);
    
    CounterController.$inject = ['$scope', '$timeout'];
    function CounterController($scope, $timeout) {
        $scope.counter = 0;
        
        //1 We have to call $digest in order to call "$digest", because "setTimeout" function is outside the aungular context
        /*$scope.upCounter = function() {
            setTimeout(function() {
                $scope.counter++;
                console.log("Counter incremented");
                $scope.$digest();
            }, 2000);
        };*/
        
        //2 We can make a function get inside the angular context with "$apply"
        /*$scope.upCounter = function() {
            setTimeout(function() {
                $scope.$apply(function() {
                    $scope.counter++;
                    console.log("Counter incremented");
                });
            }, 2000);
        };*/
        
        //3 Using native "$timeout" function
        $scope.upCounter = function() {
            $timeout(function() {
                $scope.counter++;
                console.log("Counter incremented");
            }, 2000);
        };
    }

})();