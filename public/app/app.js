(function () {
    'use strict';
    var app = angular.module('app' [
        'ngRoute'
        ]);
    app.config([
        '$logProvider',
        '$routeProvider',
        function($logProvider, $routeProvider) {
            $logProvider.debugEnabled(true);

            $routeProvider
                .when('/', {
                   templateUrl: 'app/views/example2.html'
                });
        }
    ]);
});