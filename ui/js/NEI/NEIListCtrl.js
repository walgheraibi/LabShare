/**
 * Created by weaamalgheraibi on 3/3/15.
 */
define(['angular'], function (angular) {
    'use strict';
    return angular.module('NEIApp', []).controller('NEIListCtrl', function ($scope, $http) {

        var url='http://localhost:9090/samples';
        $http.get(url).success(function (data,status,headers,config) {

            $scope.samples = data.samples;
        }).error(function(data,status,headers,config) {
            console.log(status);
            console.log(data);
            $scope.errors = "Cannot find samples ";
        });
    }).controller('SampleListCtrl2',
        function ($scope, SampleListService) {
            $scope.driversList = [];
            SampleListService.getdate().success(function(response) {
                $scope.driversList = response;
            })}
    );
});