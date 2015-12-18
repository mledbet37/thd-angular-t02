var BaseController = (function() {
    angular.module('app').controller('BaseController', BaseController);

    BaseController.$inject = ['$scope', '$log'];

    function BaseController($scope, $log) {
        var vm = this;
        vm.$log = $log;
        $scope.$log = $log;
        $scope.SayName = vm.sayName($scope);
        vm.name = "Parent vm Name";
        $scope.name = "Parent $scope Name";
        $scope.sayName = vm.sayName($scope);
    }

    BaseController.prototype.sayName = function($scope) {
        var vm = this;
        if (vm.name) {
            return vm.name;
        } else {
            return "No Name";
        }
    }

    BaseController.prototype.getDependencies = function($scope) {

    }

    return BaseController;
}());

