(function () {
    'use strict';
    angular.module('app', [
            'ngRoute'
        ])
    .config([
        '$routeProvider',
        '$logProvider',
        function($routeProvider, $logProvider) {
            $logProvider.debugEnabled(true);

            $routeProvider
                .when('/', {
                    //templateUrl: 'app/views/example1.html'
                });
        }
    ]);
}());