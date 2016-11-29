'use strict'
var app = angular.module('app', ['controllers', 'ngRoute', 'ui.bootstrap','angular-timeline']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/',
	{
		templateUrl: 'home',
		controller: 'homeController'
	}).
	when('/education',
	{
		templateUrl: 'education',
		controller: 'eduController'
	}).
	when('/experience',
	{
		templateUrl: 'template/experience.html',
		controller: 'expController'
	}).
	when('/contact',
	{
		templateUrl: 'contact',
		controller: 'contactController'
	}).
	otherwise({
		redirectTo: '/'
	})

}
]);