/**
 * Created by james on 2/19/15.
 */
/*
 * This handles retrieving data and is used by controllers.
 * You can use controller to call relative service when needed.
 */
define(['angular'], function (angular) {
    'use strict';
    return angular.module('app.helloworld.services', []).service('helloWorldService', function ($http, $q, $log) {
        // $q helps run functions asynchronously, and use return values when done processing
        //write your service here.
        this.hello = function(servicesUrl, name) {
            $log.debug('Services Url: ' + servicesUrl);
            $log.debug('Name: ' + name);
            //$http methods return promise which then can be used to register callbacks for success and error
            var request = $http.post( servicesUrl + '/HelloWorld', { name: name } );
            return( request.then( handleSuccess, handleError ) ); //TODO: handle case neither success nor failure returned
        };
        function handleError( response ) {
            $log.debug('handling error');
            if(!angular.isObject(response.data) || !response.data.message) {
                return($q.reject("An unknown error occurred"));
            }
            //Creates a promise that is resolved as rejected with specified reason
            return ( $q.reject( response.data.message ) );
        };
        function handleSuccess( response ) {
            $log.debug('handling success');
            return( response.data );
        };
    });
});
