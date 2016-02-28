var app = angular.module('myMenus', ['ngRoute']);

app.config(function ($routeProvider) {



    $routeProvider
        .when('/', {
            templateUrl: 'views/maSemaine.html',
            controller: 'maSemaineController'
        })
        .when('/maListe', {
            templateUrl: 'views/maListe.html',
            controller: 'maListeController'
        })
        .when('/mesRecettes', {
            templateUrl: 'views/mesRecettes.html',
            controller: 'mesRecettesController'
        })
        .when('/mesAliments', {
            templateUrl: 'views/mesAliments.html',
            controller: 'mesAlimentsController'
        })
        .otherwise({ redirectTo: '/' });

});