/**
 * Setup of main AngularJS application, with Restangular being defined as a dependency.
 *
 * @see controllers
 * @see services
 */
var app = angular.module('App1',
    [
        'ngRoute',
        'App1.MainController',
        'App1.AboutController',
        'App1.ContactController',
        'App1.hcAreaChart',
        'App1.callsService'
    ]
);

app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl : 'app/partials/home.html',
            controller  : 'MainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'app/partials/about.html',
            controller  : 'AboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'app/partials/contact.html',
            controller  : 'ContactController'
        })
        .otherwise({redirectTo:"/"});
});

app.constant('config', {
    appName: 'My App',
    appVersion: 2.0,
    apiUrl: '/ang/angular/ang2/phpApp/'
});

