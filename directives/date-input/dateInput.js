angular.module('myModule').directive('dateInput', [function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$formatters.unshift(function(value) {
                var date =  new Date(parseInt(value));
                if (isNaN(date.getTime())) return value;
                return date.getDate() + "/" + parseInt(date.getMonth()+1) + "/" + date.getFullYear();
            });

            ngModel.$render = function() {
                element.val(ngModel.$viewValue);
            };

            ngModel.$parsers.unshift(function(viewValue) {
                var dateParts = viewValue.split('/');
                var date = new Date(Date.UTC(dateParts[2], dateParts[1], dateParts[0]));
                if (isNaN(date.getTime())) return viewValue;
                return date.getTime();
            });
        }
    };
}]);
