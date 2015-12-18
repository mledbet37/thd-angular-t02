(function() {
    angular('app').directive('TemplateDirective', TempDir);

    function TempDir() {
        return {
            restrict: 'E',
            scope: {
                path: '@'
            },
            template: "<ng-include src='path'></ng-include>"
        }
    }
}());