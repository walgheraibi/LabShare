/**
 * Created by weaamalgheraibi on 2/24/15.
 */

define(['angular'], function (angular) {
    'use strict';
    return angular.module('app.StemCells.services', []).service('SampleListService', ['$http',
        function($http){
            return $http.get('samples/sample.json').success(function(data) {
                return data;
        })}]);

});


