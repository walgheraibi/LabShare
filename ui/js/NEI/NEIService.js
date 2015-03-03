/**
 * Created by weaamalgheraibi on 3/3/15.
 */

define(['angular'], function (angular) {
    'use strict';
    /*   return angular.module('app.StemCells.services', []).service('SampleListService', ['$http',
     function($http){
     return $http.get('http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK').success(function(data) {
     return data;
     })}]);*/

    /*  angular.module('app.StemCells.services', []).factory('SampleListService', function($http) {
     var result = {};
     result.getdate = function () {
     return $http({
     method: 'GET',
     url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
     })};
     return result;
     });*/
    return  angular.module('app.StemCells.services', []).factory('SampleListService', function($http) {
        var result = {};
        result.getdate = function () {
            return $http({
                method: 'GET',
                url: 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
            })};
        return result;
    });

});