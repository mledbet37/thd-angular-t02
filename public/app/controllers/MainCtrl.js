(function() {
    angular.module('app')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$routeParams', 'ExampleService'];

    function MainCtrl($scope, $routeParams, ExampleService) {
        var vm = this;
        vm.service = ExampleService;
        vm.headerMessage = "Example " + $routeParams.num;
        vm.success = "Success";
        console.log("here we are");

        vm.data = [];

        vm.getServerData();
    }

    MainCtrl.prototype.getServerData = function() {
        var vm = this;
        //console.log(vm.service);
        vm.service.getData()
            .then(
                function(data) {
                    vm.data = data;
                    console.log(vm.data.data);
                    console.log("We have data");
                }
            )
    }

}());