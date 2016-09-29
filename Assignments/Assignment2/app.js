(function() {
    'use strict';
    console.clear();
    
    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    
    ToBuyController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function ToBuyController($scope, ShoppingListCheckOffService) {
        $scope.toBuyList = ShoppingListCheckOffService.getToBuyList();
        
        $scope.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        }
    }
    
    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
    function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
        $scope.alreadyBoughtList = ShoppingListCheckOffService.getAlreadyBouthList();
    }
    
    function ShoppingListCheckOffService() {
        var service = this;
        
        var toBuyList = [
            {name: 'Cookies', quantity: '56'},
            {name: 'Bananas', quantity: '25'},
            {name: 'Candies', quantity: '64'},
            {name: 'Apples', quantity: '13'},
            {name: 'Oranges', quantity: '24'}
        ];
        var alreadyBoughtList = [];
        
        service.buyItem = function(itemIndex) {
            alreadyBoughtList.push(toBuyList[itemIndex]);
            toBuyList.splice(itemIndex, 1);
        };
        
        service.getToBuyList = function() {return toBuyList};
        service.getAlreadyBouthList = function() {return alreadyBoughtList};
    }
    
    
})();