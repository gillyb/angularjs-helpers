angular.module('myModule').directive('sleekSelect', ['$document', '$timeout', function($document, $timeout) {
    return {
        restrict: 'A',
        scope: true,
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            scope.visible = false;

            var positionOptions = function() {
                var options = element.find('.options');
                // TODO: extract the offset to options given from outside
                options.css({
                    top: (element.outerHeight(true) - 2) + 'px',
                    left: '-1px'
                });
            };

            var selectedValueArea = element.find('div.selected-value');
            selectedValueArea.click(function() {
                scope.visible = true;
                positionOptions();
                element.css({'position':'relative'});

                $timeout(function() {
                    $document.one('click', function(e) {
                        var clickedOnDropDown = element.find(e.target).length > 0;
                        if (!clickedOnDropDown) {
                            scope.$apply(function() {
                                scope.visible = false;
                            });
                        }
                    });
                }, 200);
            });

            var optionsAreas = element.find('.option');
            optionsAreas.click(function() {
                ngModel.$setViewValue($(this).html());
                ngModel.$commitViewValue();

                scope.selectedTitle = $(this).html();

                scope.$apply(function() {
                    scope.visible = false;
                });
            });

            ngModel.$formatters.unshift(function(value) {
                var title = element.find('.option[value="' + value + '"]').html();
                scope.selectedTitle = title;
                return title;
            });

            ngModel.$render = function() {
                scope.selectedTitle = ngModel.$viewValue;
            };

            ngModel.$parsers.unshift(function(viewValue) {
                var modelValue = getSelectedValueFromTitle(viewValue);
                return modelValue;
            });

            scope.$on('$destroy', function() {
                if (optionsAreas) optionsAreas.unbind();
                if (selectedValueArea) selectedValueArea.unbind();
            });

            function getSelectedValueFromTitle(val) {
                var options = element.find('.option');
                for (var i=0; i<options.length; i++) {
                    if ($(options[i]).html() == val) {
                        return $(options[i]).attr('value');
                    }
                }
            }
        }
    };
}]);
