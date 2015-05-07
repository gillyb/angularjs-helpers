/*
 * Allows outputing html in an angularjs template.
 * Usage : <span ng-bind-template="{{content | trustAsHtml}}"></span>
 */
angular.module('myModule').filter('trustAsHtml', function ($sce) {
  return $sce.trustAsHtml;
});
