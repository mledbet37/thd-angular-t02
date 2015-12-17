(function () {
    'use strict';
    var app = angular.module('app' [
        'ngRoute'
        ]);
    app.config([
        function($logProvider) {
            $logProvider.debugEnabled(true);
        }
    ]);
});