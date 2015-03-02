/**
 * Created by James on 2/28/15.
 */
define(['angular'], function (angular) {
    'use strict';
    return angular.module('app.xtk.directives', []).directive('xtkDemo', ['$log',
        function ($log) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    scope.init = function() {
                        var renderer;
                        renderer = new X.renderer3D;
                        renderer.container = element[0];
                        renderer.init();
                        var skull = new X.mesh();
                        // .. and associate the .vtk file to it
                        skull.file = 'http://x.babymri.org/?skull.vtk';
                        // .. make it transparent
                        skull.opacity = 0.7;
                        // .. add the mesh
                        renderer.add(skull);
                        // re-position the camera to face the skull
                        renderer.camera.position = [0, 400, 0];

                        // animate..
                        renderer.onRender = function() {

                            // rotate the skull around the Z axis
                            // since we moved the camera, it is Z not X
                            skull.transform.rotateZ(1);
                        };
                        renderer.render();
                    }
                    scope.init();
                }
            }
        }
    ]);
});