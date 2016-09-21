(function () {
    'use strict';
    
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController)
        .filter('loves', LoveFilter)
        .filter('truth', TruthFilter); // We are going to use this one only in the HTML, so we don't need to append it into the controller
    
    MsgController.$inject = ['$scope', 'lovesFilter'];
    function MsgController($scope, lovesFilter) {
        $scope.name = "Kevin";
        $scope.stateOfBeing = "hungry";
        
        $scope.sayMessage = function () {
            var msg = "Kevin likes to eat healthy snacks at night!";
            return msg;
        };
        
        $scope.sayLovesMessage = function () {
            var msg = "Kevin likes to eat healthy snacks at night!";
            msg = lovesFilter(msg);
            return msg;
        };
        
        $scope.feedKevin = function () {
            $scope.stateOfBeing = "fed";
        };
    }
    
    function LoveFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "loves");
            return input;
        }
    }
    
    function TruthFilter() {
        return function(input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }

})();