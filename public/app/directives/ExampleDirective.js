(function() {
    'use strict';
    angular.module('app')
        .directive('ExampleDirective', ExampleDirective);

    function ExampleDirective() {
        function link(scope, element, attribute) {

        }

        return {
            link: link,
            scope: {
                data: "="
            },
            template: "<div class='test-stuff'></div>",
            templateUrl: "/path/to/template.html"
        }
    }
}());