'use strict';

/*Initialize the app*/
var myApp = angular.module('myApp', [
  'ngAnimate',
  'ngMaterial',
  'ui.router'
]);


/*Configure some things*/
myApp.config(function(
  $urlRouterProvider,
  $mdThemingProvider,
  $locationProvider,
  $mdAriaProvider) {


  /* Set angular-material theme */
  $mdThemingProvider.theme('default')
    .primaryPalette('teal', { 'default': '500' })
    .accentPalette('blue', { 'default': '500' })
    .warnPalette('yellow', { 'default': '700' });


  $urlRouterProvider.otherwise('/'); // keep urls clean
  $locationProvider.hashPrefix('');

  $mdAriaProvider.disableWarnings(); // silence aria-related console warnings
});


/*Start it*/
myApp.run();