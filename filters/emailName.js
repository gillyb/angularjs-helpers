/*
 * Outputs only the first part of an email. (gillyb@gmail.com -> gillyb)
 * Usage : <span ng-bind-template="{{username | emailName}}"></span>
 */
angular.module('myModule').filter('emailName', function() {
    return function(input) {
        return input.substr(0, input.indexOf('@'));
    };
});