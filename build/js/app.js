"use strict";angular.module("feelingsJournal",["ui.router"]).config(["$stateProvider","$urlRouterProvider","$httpProvider",function(t,e,o){t.state("home",{url:"/",templateUrl:"./app/features/home/homeTmpl.html",controller:"homeCtrl as homeCtrl"}),e.otherwise("/")}]),angular.module("feelingsJournal").constant("AUTH_EVENTS",{notAuthenticated:"auth-not-authenticated",notAuthorized:"auth-not-authorized"}).constant("API",{}),angular.module("feelingsJournal").controller("homeCtrl",function(){});