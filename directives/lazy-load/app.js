var app = angular.module('MyModule', ['ngRoute']);

app.config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {

    $routeProvider.when('/', {
        templateUrl: 'views/Home.html',
        controller: 'HomeController'
    });

    app.compileProvider = $compileProvider;

}]);
