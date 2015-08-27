angular.module('myModule').directive('inputLimit', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var limit = attrs['inputLimit'];

            var listener = scope.$watch(function() {
                return element.val();
            }, function() {
                if (element.val().length > limit)
                    element.val(element.val().substr(0, limit));
            });

            scope.$on('$destroy', listener);
        }
    }
}]);
