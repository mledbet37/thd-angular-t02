(function () {
    'use strict';

    var myApp = myApp || {},
        BaseCtrl = BaseController || null;

    angular.module("app").controller("ChildController", ChildController);

    ChildController.$inject = ['$scope'];

    function ChildController($scope) {
        BaseCtrl.call(this, $scope);
        var vm = this;
        vm.name = 'Child vm Name';
        $scope.name = 'Child $scope Name';
        console.log(this);
    }

    ChildController.prototype = Object.create(BaseCtrl.prototype);

}());