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
    'ngTouch',
    'firebase'
  ])
  .constant('FIREBASE_URL', 'https://codify-interactive.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
