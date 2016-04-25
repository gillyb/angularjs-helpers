angular.module('myModule').directive('mySwitch', [function() {

    var html = '<div class="my-switch" ng-click="toggleChecked()">' +
                    '<input type="checkbox" role="checkbox" ng-checked="checked">' +
                    '<label ng-class="{\'checked\':checked}">' +
                        '<span ng-class="{\'checked\':checked}"></span>' +
                    '</label>' +
                '</div>';

    return {
        restrict: 'E',
        template: html,
        scope: {
            checked: '=?'
        },
        link: function(scope) {
            scope.toggleChecked = function() {
                scope.checked = !scope.checked;
            };
        }
    }
}]);

