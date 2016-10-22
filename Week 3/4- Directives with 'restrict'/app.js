(function () {
    'use strict';
    console.clear();
    
    angular.module('ShoppingListDirectiveApp', [])
        .controller('ShoppingListController1', ShoppingListController1)
        .controller('ShoppingListController2', ShoppingListController2)
        .factory('ShoppingListFactory', ShoppingListFactory)
        .directive('listItemDescription', listItemDescription)
        .directive('listItem', listItem);
    
    function listItemDescription() {
        var ddo = {
            restrict: "E", /*A:attribute, E:element, AE:both*/
            template: '{{item.quantity}} of {{item.name}}'
        };
        
        return ddo;
    }
    
    function listItem() {
        var ddo = {
            templateUrl: 'listItem.html'
        };

        return ddo;
    }
    
    ShoppingListController1.$inject = ['ShoppingListFactory'];
    function ShoppingListController1(ShoppingListFactory) {
        var list1 = this;
        
        var shoppingList = ShoppingListFactory();
        
        list1.items = shoppingList.getItems();
        
        list1.itemName = "";
        list1.itemQuantity = "";
        
        list1.addItem = function() {
            shoppingList.addItem(list1.itemName, list1.itemQuantity);
        };

        list1.removeItem = function(itemIndex) {
            shoppingList.removeItem(itemIndex);
        };
    }
    
    ShoppingListController2.$inject = ['ShoppingListFactory'];
    function ShoppingListController2(ShoppingListFactory) {
        var list2 = this;

        var shoppingList = ShoppingListFactory(3);

        list2.items = shoppingList.getItems();

        list2.itemName = "";
        list2.itemQuantity = "";

        list2.addItem = function() {
            try {
                shoppingList.addItem(list2.itemName, list2.itemQuantity);
            }
            catch (error) {
                list2.errorMessage = error.message;
            }
        };

        list2.removeItem = function(itemIndex) {
            shoppingList.removeItem(itemIndex);
        };
    }
    
    function ShoppingListService(maxItems) {
        var service = this;
        
        var items = [];
        
        service.addItem = function (itemName, quantity) {
            if ( (maxItems === undefined) ||
                 (maxItems !== undefined) && (items.length < maxItems) ) {
                var item = {
                    name: itemName,
                    quantity: quantity
                };
                
                items.push(item);
            }
            else {
                throw new Error("Max items (" + maxItems + ") reached.");
            }
        }
        
        service.removeItem = function (itemIndex) {
            items.splice(itemIndex, 1);
        }

        service.getItems = function() {
            return items;
        }
    }
    
    function ShoppingListFactory() {
        var factory = function(maxItems) {
            return new ShoppingListService(maxItems);
        };
        
        return factory;
    }

})();