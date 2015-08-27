angular.module('myModule').directive('infiniteScroll', ['$window', '$timeout', function($window, $timeout) {
    return {
        restrict: 'E',
        scope: {
            trigger: '&',
            threshold: '@',
            triggerDelay: '@'
        },
        link: function(scope) {
            scope.currentPage = 1;
            var body = document.body,
                html = document.documentElement;

            var triggerMethod = scope.trigger();
            var checkThreshold = function() {
                var height = Math.max( body.scrollHeight, body.offsetHeight,
                    html.clientHeight, html.scrollHeight, html.offsetHeight );

                if (height - ($window.innerHeight + $window.scrollY) <= scope.threshold) {
                    triggerMethod(scope.currentPage++);
                }
            };

            var blocker = undefined;
            var block = false;
            angular.element($window).bind('scroll', function() {
                if (block) return;

                block = true;
                checkThreshold();

                $timeout(function() {
                    block = false;
                }, scope.triggerDelay);
            });

            scope.$on('$destroy', function() {
                angular.element($window).unbind();
                if (blocker) $timeout.cancel(blocker);
            });
        }
    };
}]);
