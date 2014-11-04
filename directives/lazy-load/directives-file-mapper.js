app.service('DirectivesFileMapper', function() {

    var _mapper = {
        SexyDirective: 'sexy-directive.js'
    };

    function _get(directiveName) {
        return _mapper[directiveName];
    }

    return {
        get: _get
    };

});
