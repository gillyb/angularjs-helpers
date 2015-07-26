//
// cache-service.js
// This is a general cache service for angularjs apps
//
// Used like this :
//   CacheService.get('country-list', function() {
//     return $http.get('/country-list'); 
//   }, 60 * 60);
//
// The first parameter is the name of the cache key you want to retrieve.
// Second parameter is a function that can retrieve the data to be cached. This is only
//    invoked if the data isn't present in the cache, or is expired.
// Third parameter is the amount of seconds to live in the cache. It's optional, and defaults to 10 min.
//
// Always returns a promise, then when resolved has the data you requested.
//
// You can also clear/invalidate values from the cache, like this:
//   CacheService.clear('country-list');
//
// Behind the scenes, this cache service uses the sessionStorage api
//
angular.module('myModule').service('CacheService', ['$q', '$window', function($q, $window) {

    var _set = function(key, value, secondsToLive) {
        if (!$window.sessionStorage)
            return;

        var cacheObject = {
            value: angular.fromJson(value),
            exp: parseInt((Date.now() / 1000) + secondsToLive)
        };
        var cacheKey = '_internalCache.' + key;
        $window.sessionStorage.setItem(cacheKey, angular.toJson(cacheObject));
    };

    var get = function(key, getterFunc, secondsToLive) {
        var d = $q.defer();
        var secondsToLive = secondsToLive || 60 * 10; // default to 10min

        var cacheKey = '_internalCache.' + key;
        var value = $window.sessionStorage.getItem(cacheKey);

        if (typeof value == 'string') {
            var valObj = angular.fromJson(value);
            if (valObj && typeof valObj == 'object' && valObj.exp && valObj.exp >= (Date.now() / 1000)) {
                d.resolve(angular.fromJson(valObj.value));
                return d.promise;
            }
        }

        // if we got a regular function as a getterFunc
        if (typeof getterFunc == 'function') {
            var getResponse = getterFunc();
            if (typeof getResponse == 'object' && getResponse.then && typeof getResponse.then == 'function') {
                getResponse.then(function (g) {
                    _set(key, g, secondsToLive);
                    d.resolve(g);
                });
                return d.promise;
            }

            _set(key, getResponse, secondsToLive);
            d.resolve(getResponse);
            return d.promise;
        }

        // if we got a promise as a getterFunc
        if (typeof getterFunc == 'object' && getterFunc.then && typeof getterFunc.then == 'function') {
            getterFunc.then(function(getResponse) {
                _set(key, getResponse, secondsToLive);
                d.resolve(getResponse);
            });
            return d.promise;
        }
    };

    var clear = function(key) {
        var cacheKey = '_internalCache.' + key;
        $window.sessionStorage.removeItem(cacheKey);
    };

    return {
        get: get,
        clear: clear
    };

}]);
