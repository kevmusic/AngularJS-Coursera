(function () {
    'use strict';
    
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);
    
    MsgController.$inject = ['$scope', '$filter'];
    function MsgController($scope, $filter) {
        $scope.name = "Kevin";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45;
        
        $scope.sayMessage = function () {
            var msg = "Kevin likes to eat healthy snacks at night";
            var output = $filter("uppercase")(msg);
            return output;
        };
        
        $scope.feedKevin = function () {
            $scope.stateOfBeing = "fed";
        };
    }

})();