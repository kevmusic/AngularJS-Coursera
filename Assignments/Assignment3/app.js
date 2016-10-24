(function() {
    'use restrict';
    console.clear();

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItemsDirective);

    function foundItemsDirective() {
        var ddo = {
            templateUrl: 'loader/itemsloaderindicator.template.html',
            scope: {
                found: '<',
                onRemove: '&'
            },
            controller: foundItemsDirectiveController,
            controllerAs: 'fidC',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        nit = this;
        nit.found = [];
        
        nit.filter = function(iSearch) {
            MenuSearchService.getMatchedMenuItems(iSearch)
                .then(function(response){
                nit.found = response;
            });
        }
        
        nit.removeItem = function(index) {
            nit.found.splice(index, 1);
        }
        
        nit.filter();
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            searchTerm = searchTerm || '';
            
            return $http({
                method: "GET",
                url: ("http://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function(response) {
                var filtered_list = [];
                $(response.data.menu_items).each(function(index, item) {
                    
                    if (item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
                        filtered_list.push(item);
                    }
                });
                return filtered_list;
            });
        };
    }
    
    function foundItemsDirectiveController() {}
})();