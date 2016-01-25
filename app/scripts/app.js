'use strict';

/**
 * @ngdoc overview
 * @name miwebApp
 * @description
 * # miwebApp
 *
 * Main module of the application.
 */
angular
  .module('miwebApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl',
        controllerAs: 'inicio'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .when('/redessociales', {
        templateUrl: 'views/redessociales.html',
        controller: 'RedessocialesCtrl',
        controllerAs: 'redessociales'
      })
      .when('/clientes', {
        templateUrl: 'views/clientes.html',
        controller: 'ClientesCtrl',
        controllerAs: 'clientes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
