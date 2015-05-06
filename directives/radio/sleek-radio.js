angular.module('myModule').directive('sleekRadio', [function() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {
            selected: '='
        },
        template: '<div class="radio-wrapper"><div class="sleek-radio-outline"><div class="sleek-radio-dot" ng-class=\'{"selected":selected}\'></div></div><ng-transclude></ng-transclude></div>',
        link: function() {

        }
    };
}]);
