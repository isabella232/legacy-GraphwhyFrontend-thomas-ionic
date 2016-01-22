'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'facebook',
  'nvd3'
])
.config(function ($stateProvider, $urlRouterProvider, FacebookProvider, $locationProvider) {
  // ROUTING with ui.router
  FacebookProvider.init('872274976224449');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      abstract: false,
      templateUrl: 'main/templates/menu.html',
      controller: 'AllCtrl'
    })    
    .state('main.results', {
      url: '/results/:qnum',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/results.html',
          controller: 'ResultsCtrl'
        }
      }
    })
    .state('main.finish', {
      url: '/:id/finish',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/finish.html'
          //controller: 'MenuCtrl as menu'
        }
      }
    })
    .state('main.question', {
      url: '/:id/:qnum',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/question.html',
          controller: 'QuestionCtrl'
        }
      }
    })
    .state('main.profile', {
      url: '/',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/profile.html',
          controller: 'MenuCtrl'
        }
      }
    })
    .state('main.PPTOU', {
      url: '/pptou',
      views: {
        'pageContent': {
          templateUrl: 'main/templates/pptou.html',
          controller: 'AllCtrl'
        }
      }
    });


    $locationProvider.html5Mode(true);
});
