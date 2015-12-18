(function () {
    'use strict';
    angular.module('app', [
            'ngRoute'
            ])
        .config([
            '$logProvider',
            '$routeProvider',
            function ($logProvider, $routeProvider) {
                $logProvider.debugEnabled(true);

                $routeProvider
                    .when('/', {
                        templateUrl: 'app/views/example0.html',
                    })
                    .when('/:num', { // http://localhost:8080/#/1
                        templateUrl: 'app/views/example0.html',
                        controller: 'MainCtrl',
                        controllerAs: 'main'
                    });
            }
        ]);
}());