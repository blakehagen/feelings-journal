'use strict';

angular.module('feelingsJournal', ['ui.router']).config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './app/features/home/homeTmpl.html',
      controller: 'homeCtrl as homeCtrl'
    });

  $urlRouterProvider
    .otherwise('/');

  // $httpProvider.interceptors.push('authInterceptor');

});