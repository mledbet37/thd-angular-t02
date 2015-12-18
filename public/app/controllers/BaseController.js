var BaseCtrl = (function() {
    angular.module('app')
        .controller('BaseController', BaseController);


    BaseController.$inject = ['$scope'];

    function BaseController($scope) {
        var vm = this;

        vm.name = "I'm Base Ctrl";
    }

    BaseController.prototype.sayName = function($scope) {
        var vm = this;

        return vm.name;
    }

    return BaseController;

}());

