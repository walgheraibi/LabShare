define(['angular', 'lsModels'], function (angular) {
    'use strict';
    return angular.module('app.helloworld.ctrls', []).controller('helloCtrl', [
        '$scope', function($scope) {
            $scope.helloworld = 'helloworld';
            var user = LabUser({userName:'qaadmin1'});
            $scope.hello = 'Hello ' + user.userName;
        }
    ]).controller('helloCtrlService', function($scope, helloWorldService) {
        helloWorldService.hello("http://0.0.0.0:9090", "James").then(
            function(response) {
                $scope.message = response.message;
            },
            function(errorMessage) {
                $scope.message = errorMessage;
            }
        );
    });
});