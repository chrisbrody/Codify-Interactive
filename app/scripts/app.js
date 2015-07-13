/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name codifyInteractiveApp
 * @description
 * # codifyInteractiveApp
 *
 * Main module of the application.
 */
var app = angular
  .module('codifyInteractiveApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
