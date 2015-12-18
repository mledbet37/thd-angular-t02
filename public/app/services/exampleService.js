(function() {
    angular.module('app')
        .factory('ExampleService', ExampleService);

    ExampleService.$inject = ['$http'];

    function ExampleService($http) {



        function getTestData() {
            return $http({method: 'GET', url: 'http://localhost:8080/getTestData'})
                .then(
                    function(response) {
                        //console.log("Success");
                        //console.log(response);

                        return response.data;
                    },
                    function(response) {
                        console.log("Error");
                    }
                )
        }

        return {
            getData: getTestData
        }
    }

    return {
        service: ExampleService
    }
}());