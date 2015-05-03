angular.module('myModule').directive('dropdownTrigger', ['$document', '$timeout', function($document, $timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            scope.visible = false;
            element.click(function() {
                scope.visible = true;

                var menu = element.find('.dropdown');
                menu.css({
                    top: element.offset().top - 13 + 'px',
                    left: (element.offset().left - menu.outerWidth(true) + element.outerWidth(true)) + 'px'
                });

                $timeout(function() {
                    $document.one('click', function(e) {
                        var clickedOnDropDown = element.find(e.target).length > 0;
                        if (!clickedOnDropDown) {
                            scope.visible = false;
                        }
                    });
                }, 200);
            });
        }
    };
}]);