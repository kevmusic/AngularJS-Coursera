(function() {
    'use strict';

    angular.module("ImgApp", [])
        .controller('ImgController', ImgController);
    
    function ImgController ($scope) {
        $scope.imageNumber = "1";
        
        $scope.changeImage = function() {
            $scope.imageNumber = $scope.imageNumber == "1" ? "2" : "1";
        };
    }

})();