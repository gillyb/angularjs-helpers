
// THIS IS JUST AN EXAMPLE USAGE, FROM WITHIN A CONTROLLER
// YOU CAN ALSO DO THE SAME FROM ANOTHER SERVICE

app.controller('HomeController', ['$document', 'LazyDirectiveLoader', function($document, LazyDirectiveLoader) {

    LazyDirectiveLoader.load('SexyDirective').then(function() {

        // now that it's loaded, we can dynamically create one if we wish to
        // add some sexiness to our app
        var directive = LazyDirectiveLoader.loadDirective('SexyDirective');
        $document.append(directive);

    });

}]);
