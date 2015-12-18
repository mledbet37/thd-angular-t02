(function() {
    angular.module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$routeParams'];

    function MainCtrl($scope, $routeParams) {
        var vm = this;
        vm.headerMessage = "Example " + $routeParams.num;
        vm.success = "Success";
        console.log("here we are");
    }

}());