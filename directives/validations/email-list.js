angular.module('myModule').directive('emailList', [function() {

    function validEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            model.$parsers.unshift(function(value) {
                if (!value) {
                    model.$setValidity('emailList', true);
                    return '';
                }

                var valid = true;
                var emails = value.split(',');
                emails.forEach(function(email) {
                    if (!validEmail(email.trim())) {
                        model.$setValidity('emailList', false);
                        valid = false;
                    }
                });

                if (valid) {
                    model.$setValidity('emailList', true);
                    return value;
                }

                return undefined;
            });
        }
    };
}]);
