angular.module('myModule').directive('myTooltip', ['$document', function($document) {

    var html = '<div class="tooltip-wrapper" ng-transclude></div>';

    return {
        restrict: 'E',
        template: html,
        transclude: true,
        scope: {
            text: '@',
            position: '@?'
        },
        link: function(scope, element) {
            var tooltip = angular.element('<div class="my-tooltip">' + scope.text + '</div>')[0];
            $document.find('body').append(tooltip);

            element.bind('mouseover.tooltip', function(e) {
                tooltip.style.display = 'inline-block';

                var elementPos = e.target.getBoundingClientRect();

                var margin = 8;
                if (scope.position == 'top')
                    tooltip.style.top = (elementPos.top - tooltip.offsetHeight - margin) + 'px';
                else
                    tooltip.style.top = (elementPos.bottom + margin) + 'px';
                    
                tooltip.style.left = (elementPos.left - (tooltip.offsetWidth / 2)) + 'px';
            });

            element.bind('mouseout.tooltip', function() {
                tooltip.style.display = 'none';
            });
            
            scope.$on('$destroy', function() {
                element.unbind('.tooltip');
            });
        }
    };

}]);
