/**
 * Created by weaamalgheraibi on 2/20/15.
 */

define(['angular'], function (angular) {
    'use strict';
    return angular.module('app.StemCells.ctrls', []).factory('taskStorage', function () {
        var DEMO_TASKS, STORAGE_ID;
        STORAGE_ID = 'tasks';
        DEMO_TASKS = '[ {"title": "Finish homework", "completed": true}, {"title": "Make a call", "completed": true}, {"title": "Play games with friends", "completed": false}, {"title": "Shopping", "completed": false}, {"title": "One more dance", "completed": false}, {"title": "Try Google glass", "completed": false} ]';
        return {
            get: function () {
                return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS);
            },
            put: function (tasks) {
                return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
            }
        };
    }).directive('taskFocus', [
        '$timeout', function ($timeout) {
            return {
                link: function (scope, ele, attrs) {
                    return scope.$watch(attrs.taskFocus, function (newVal) {
                        if (newVal) {
                            return $timeout(function () {
                                return ele[0].focus();
                            }, 0, false);
                        }
                    });
                }
            };
        }
    ]).controller('StemCellsCtrl', [
        '$scope', 'taskStorage', 'filterFilter', '$rootScope', 'logger', function ($scope, taskStorage, filterFilter, $rootScope, logge) {

            $scope.showContent = function ($fileContent) {
                $scope.content = $fileContent;
            };

            var tasks;
            tasks = $scope.tasks = taskStorage.get();
            $scope.newTask = '';
            $scope.remainingCount = filterFilter(tasks, {
                completed: false
            }).length;
            $scope.editedTask = null;
            $scope.statusFilter = {
                completed: false
            };
            $scope.filter = function (filter) {
                switch (filter) {
                    case 'all':
                        return $scope.statusFilter = '';
                    case 'active':
                        return $scope.statusFilter = {
                            completed: false
                        };
                    case 'completed':
                        return $scope.statusFilter = {
                            completed: true
                        };
                }
            };
            $scope.add = function () {
                var newTask;
                newTask = $scope.newTask.trim();
                if (newTask.length === 0) {
                    return;
                }
                tasks.push({
                    title: newTask,
                    completed: false
                });
                logger.logSuccess('New task: "' + newTask + '" added');
                taskStorage.put(tasks);
                $scope.newTask = '';
                return $scope.remainingCount++;
            };
            $scope.edit = function (task) {
                return $scope.editedTask = task;
            };
            $scope.doneEditing = function (task) {
                $scope.editedTask = null;
                task.title = task.title.trim();
                if (!task.title) {
                    $scope.remove(task);
                } else {
                    logger.log('Task updated');
                }
                return taskStorage.put(tasks);
            };
            $scope.remove = function (task) {
                var index;
                $scope.remainingCount -= task.completed ? 0 : 1;
                index = $scope.tasks.indexOf(task);
                $scope.tasks.splice(index, 1);
                taskStorage.put(tasks);
                return logger.logError('Task removed');
            };
            $scope.completed = function (task) {
                $scope.remainingCount += task.completed ? -1 : 1;
                taskStorage.put(tasks);
                if (task.completed) {
                    if ($scope.remainingCount > 0) {
                        if ($scope.remainingCount === 1) {
                            return logger.log('Almost there! Only ' + $scope.remainingCount + ' task left');
                        } else {
                            return logger.log('Good job! Only ' + $scope.remainingCount + ' tasks left');
                        }
                    } else {
                        return logger.logSuccess('Congrats! All done :)');
                    }
                }
            };
            $scope.clearCompleted = function () {
                $scope.tasks = tasks = tasks.filter(function (val) {
                    return !val.completed;
                });
                return taskStorage.put(tasks);
            };
            $scope.markAll = function (completed) {
                tasks.forEach(function (task) {
                    return task.completed = completed;
                });
                $scope.remainingCount = completed ? 0 : tasks.length;
                taskStorage.put(tasks);
                if (completed) {
                    return logger.logSuccess('Congrats! All done :)');
                }
            };
            $scope.$watch('remainingCount == 0', function (val) {
                return $scope.allChecked = val;
            });
            return $scope.$watch('remainingCount', function (newVal, oldVal) {
                return $rootScope.$broadcast('taskRemaining:changed', newVal);
            });

        }]).directive('onReadFile', function ($parse) {
        return {
            restrict: 'A',
            scope: false,
            link: function (scope, element, attrs) {
                var fn = $parse(attrs.onReadFile);

                element.on('change', function (onChangeEvent) {
                    var reader = new FileReader();

                    reader.onload = function (onLoadEvent) {
                        scope.$apply(function () {
                            fn(scope, {$fileContent: onLoadEvent.target.result});
                        });
                    };

                    reader.readAsText((onChangeEvent.srcElement || onChangeEvent.target).files[0]);
                });
            }
        }
    }).controller('stemCtrl', [
        '$scope', function ($scope) {
            var user = LabUser({userName: 'Weaam'});
            $scope.cells = 'Hi ' + user.userName;
        }
    ]).controller('helloCtrlService', function ($scope, helloWorldService) {
        helloWorldService.hello("http://0.0.0.0:9090", "James").then(
            function (response) {
                $scope.message = response.message;
            },
            function (errorMessage) {
                $scope.message = "Error Hello Service";
            }
        );
    }).controller('SampleListCtrl', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('samples/sample.json').success(function(data) {
                $scope.samples2 = data;
            });
        }]).controller('SampleListCtrl2', ['$scope', 'SampleListService',
        function ($scope, SampleListService) {
            $scope.samples = SampleListService.query();
            }
        ]);
});