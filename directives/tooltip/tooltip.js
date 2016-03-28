angular.module('myModule').directive('myTooltip', ['$document', function($document) {

    var html = '<div class="tooltip-wrapper" ng-transclude></div>';

    return {
        restrict: 'E',
        template: html,
        transclude: true,
        scope: {
            text: '@'
        },
        link: function(scope, element) {
            var tooltip = angular.element('<div class="my-tooltip">' + scope.text + '</div>')[0];
            $document.find('body').append(tooltip);

            element.bind('mouseover', function(e) {
                tooltip.style.display = 'inline-block';

                var elementPos = e.target.getBoundingClientRect();

                var margin = 8;
                tooltip.style.top = (elementPos.top - tooltip.offsetHeight - margin) + 'px';
                tooltip.style.left = (elementPos.left - (tooltip.offsetWidth / 2)) + 'px';
            });

            element.bind('mouseout', function() {
                tooltip.style.display = 'none';
            });
        }
    };

}]);