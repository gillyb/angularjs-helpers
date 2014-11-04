app.service('LazyDirectiveLoader', ['$rootScope', '$q', '$compile', 'DirectivesFileMapper', function($rootScope, $q, $compile, DirectivesFileMapper) {

    var _directivesLoaded = [];

    var _load = function(directiveName) {
        // make sure the directive exists in the mapper
        var directiveFile = DirectivesFileMapper.get(directiveName);
        if (!directiveFile) {
            console.log('Error: Cant find directive in mapper : ' + directiveName);
            return;
        }

        var deferred = $q.defer();

        // check if we loaded this directive already
        if (_directivesLoaded.indexOf(directiveName) >= 0) {
            deferred.resolve();
            return deferred.promise;
        }

        // Load the directive javascript file we need
        // TODO: export this part to a separate service
        var script = document.createElement('script');
        script.src = directiveFile;
        script.onload = function() {
            _modulesLoaded.push(directiveFileName);
            $rootScope.$apply(deferred.resolve);
        };
        document.getElementsByTagName('head')[0].appendChild(script);

        return deferred.promise;
    };

    // You can use this method to dynamically compile the loaded directive
    var _loadDirective = function(directiveName, attrsMap) {
        var elementName = _snakeCase(directiveName);
        var element = '<' + elementName + '></' + elementName + '>';
        // TODO: convert `attrsMap` to attributes on the directive element tag
        return $compile(element)($rootScope);
    };

    // a helper method to translate a camel case name to snake case
    // I took this directly from the angular js libraries so i know
    // it's done the same way exactly!
    var _snakeCase = function(string) {
        var SNAKE_CASE_REGEXP = /[A-Z]/g;
        separator = separator || '-';
        return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
            return (pos ? separator : '') + letter.toLowerCase();
        });
    };

    return {
        load: _load,
        loadDirective: _loadDirective
    };

}]);

