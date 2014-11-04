
app.compileProvider.directive('SexyDirective', function() {
    return {
        restrict: 'E',
        template: '<div class=\"sexy\"></div>',
        link: function(scope, element, attrs) {
            // ...
        }
    };
});
