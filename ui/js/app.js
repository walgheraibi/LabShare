/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
      'angular',
      'jquery',
      'angular-route',
      'angular-bootstrap',
      'angular-animate',
      'angular-loading-bar',
      'angular.easy-pie-chart',
      'angular-wizard',
      'flot.time',
      'flot.resize',
      'flot.stack',
      'flot.pie',
      'gauge',
      'jquery-spinner',
      'jquery-steps',
      'jquery.sparkline',
      'jquery.slimscroll',
      'kendo-ui-core',
      'morris',
      'seiyria-bootstrap-slider',
      'textAngularSetup',
      'textAngular',
      'textAngular-sanitize',
      'toastr',
      'underscore',

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
    './NEI/NEIListCtrl',
    './NEI/NEIService'



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
          'textAngularSetup',
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
          'app.helloworld.ctrls',
          'app.StemCells.services',
          'NEIApp'
      ]);
});