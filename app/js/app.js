var app = angular.module('ngViewEffects', [
	'ngRoute',
	'ngAnimate',
        'angular-p5'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/page/:pageId', {
            controller: 'pageController',
            templateUrl: function(params) {
                return 'views/page' + params.pageId + '.html';
            }
        })
        .when('/code', {
        	controller:  'codeController',
        	templateUrl: 'views/code.html'
        })
        .when('/about', {
        	templateUrl: 'views/about.html',
        	controller:  'aboutController'
        })
        .when('/author', {
        	templateUrl: 'views/author.html',
        	controller:  'authorController'
        })
        .otherwise({
        	redirectTo: '/page/1'
        });
});