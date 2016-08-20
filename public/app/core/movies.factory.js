(function () {
    'use strict';

    angular
        .module('reelr.core')
        .factory('moviesFactory', moviesFactory);

    moviesFactory.$inject = ['$http'];

    /* @ngInject */
    function moviesFactory($http) {
        
    	var service = {
    		foo: fooMethod, 
    		bar: barMethod 
    	};

    	return service;

        function fooMethod() {
        	return "foo";
        }

        function barMethod() {
        	return "bar";
        }
    }
});