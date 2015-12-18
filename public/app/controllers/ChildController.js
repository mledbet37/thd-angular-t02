(function() {
    angular.module('app')
        .controller('ChildController', ChildController);


    ChildController.$inject = ['$scope'];

    function ChildController($scope) {
        BaseCtrl.call(this, $scope);
        var vm = this;
        vm.name = "I'm a child controller";
    }
     ChildController.prototype = Object.create(BaseCtrl.prototype);
}());

