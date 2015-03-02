/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
      'angular',
      'angular-route',
      'angular-bootstrap',
      'angular-animate',
      'angular-loading-bar',
      'angular.easy-pie-chart',
      'angular-wizard',
      'jquery-plugins',
      'kendo-ui-core',
      'textAngular.min',
      'textAngular-sanitize',
      'xtk',

      './config',

      './UI/UICtrl',
      './UI/UIDirective',
      './UI/UIService',

      './shared/directives',
      './shared/localize',
      './shared/main',

      './Form/FormCtrl',
      './Form/FormDirective',
      './Form/FormValidation',

      './Table/TableCtrl',

      './Task/Task',


      './Chart/ChartCtrl',
      './Chart/ChartDirective',

      './HelloWorld/HelloWorldCtrl',
      './HelloWorld/HelloWorldService',
      './xtkDemo/xtkDirective',
    './StemCells/StemCellsCtrl',
    './StemCells/StemCellsService'


], function (ng) {
      'use strict';
      return ng.module('lsseedApp', [
          'ngRoute',
          'ngAnimate',
          'ngSanitize',
          'ui.bootstrap',
          'kendo.directives',
          'easypiechart',
          'mgo-angular-wizard',
          'textAngular',
          'angular-loading-bar',
          'app.ui.ctrls',
          'app.ui.directives',
          'app.ui.services',
          'app.controllers',
          'app.directives',
          'app.form.validation',
          'app.ui.form.ctrls',
          'app.ui.form.directives',
          'app.tables',
          'app.task',
          'app.localization',
          'app.chart.ctrls',
          'app.chart.directives',
          'app.helloworld.services',
          'app.helloworld.ctrls',
          'app.xtk.directives',
          'app.StemCells.services',
          'app.StemCells.ctrls',
          'app.constants'
      ]);
});