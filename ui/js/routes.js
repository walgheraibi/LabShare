/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function (app) {
    'use strict';
    app.config([
        '$routeProvider', function($routeProvider) {
            return $routeProvider.when('/', {
                redirectTo: '/dashboard'
            }).when('/dashboard', {
                templateUrl: 'ui/views/dashboard.html'
            }).when('/ui/typography', {
                templateUrl: 'ui/views/ui/typography.html'
            }).when('/ui/buttons', {
                templateUrl: 'ui/views/ui/buttons.html'
            }).when('/ui/icons', {
                templateUrl: 'ui/views/ui/icons.html'
            }).when('/ui/grids', {
                templateUrl: 'ui/views/ui/grids.html'
            }).when('/ui/widgets', {
                templateUrl: 'ui/views/ui/widgets.html'
            }).when('/ui/components', {
                templateUrl: 'ui/views/ui/components.html'
            }).when('/ui/timeline', {
                templateUrl: 'ui/views/ui/timeline.html'
            }).when('/ui/pricing-tables', {
                templateUrl: 'ui/views/ui/pricing-tables.html'
            }).when('/forms/elements', {
                templateUrl: 'ui/views/forms/elements.html'
            }).when('/forms/layouts', {
                templateUrl: 'ui/views/forms/layouts.html'
            }).when('/forms/validation', {
                templateUrl: 'ui/views/forms/validation.html'
            }).when('/forms/wizard', {
                templateUrl: 'ui/views/forms/wizard.html'
            }).when('/tables/static', {
                templateUrl: 'ui/views/tables/static.html'
            }).when('/tables/responsive', {
                templateUrl: 'ui/views/tables/responsive.html'
            }).when('/tables/dynamic', {
                templateUrl: 'ui/views/tables/dynamic.html'
            }).when('/charts/others', {
                templateUrl: 'ui/views/charts/charts.html'
            }).when('/charts/morris', {
                templateUrl: 'ui/views/charts/morris.html'
            }).when('/charts/flot', {
                templateUrl: 'ui/views/charts/flot.html'
            }).when('/mail/inbox', {
                templateUrl: 'ui/views/mail/inbox.html'
            }).when('/mail/compose', {
                templateUrl: 'ui/views/mail/compose.html'
            }).when('/mail/single', {
                templateUrl: 'ui/views/mail/single.html'
            }).when('/pages/features', {
                templateUrl: 'ui/views/pages/features.html'
            }).when('/pages/signin', {
                templateUrl: 'ui/views/pages/signin.html'
            }).when('/pages/signup', {
                templateUrl: 'ui/views/pages/signup.html'
            }).when('/pages/lock-screen', {
                templateUrl: 'ui/views/pages/lock-screen.html'
            }).when('/pages/profile', {
                templateUrl: 'ui/views/pages/profile.html'
            }).when('/404', {
                templateUrl: 'ui/views/pages/404.html'
            }).when('/pages/500', {
                templateUrl: 'ui/views/pages/500.html'
            }).when('/pages/blank', {
                templateUrl: 'ui/views/pages/blank.html'
            }).when('/pages/invoice', {
                templateUrl: 'ui/views/pages/invoice.html'
            }).when('/tasks', {
                templateUrl: 'ui/views/tasks/tasks.html'
            }).when('/hello', {
                templateUrl: 'ui/views/helloworld/helloworld.html'
            }).when('/xtk', {
                templateUrl: 'ui/views/xtk/xtk.html'
            }).when('/StemCells/MedicalCenter', {
                templateUrl: 'ui/views/StemCells/MedicalCenter.html'
            }).when('/StemCells/ResearchCenter', {
                templateUrl: 'ui/views/StemCells/ResearchCenter.html'
            }).when('/StemCells/OSCTR', {
                templateUrl: 'ui/views/StemCells/OSCTR.html'
            }).otherwise({
                redirectTo: '/404'
            });
        }
    ]);
});