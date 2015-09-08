angular.module('myModule').directive('enterKey', [function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.enterKey, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        
            scope.$on('$destroy', function() {
                element.unbind();
            });
        }
    };
}]);
