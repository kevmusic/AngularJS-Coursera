(function() {
    'use strict';
    angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.itemList = "";
        
        $scope.check = function() {
            var counter = 0;
            var items = $scope.itemList.split(',');
            
            for (var i=0; i<items.length; i++) {
                if (items[i] != "") {
                    counter++;
                }
            }
            
            switch(counter) {
                case 0:
                    $scope.warningLabel = "Please enter data first";
                    $scope.alert = "label label-danger";
                    break;
                case 1:
                case 2:
                case 3:
                    $scope.warningLabel = "Enjoy!";
                    $scope.alert = "label label-success";
                    break;
                default:
                    $scope.warningLabel = "Too much!";
                    $scope.alert = "label label-success";
                    break;
            }
        }
    }
    
})();