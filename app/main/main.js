'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'facebook'
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
      .state('main.signup', {
        url: '/signup',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/signup.html'
            //controller: 'MenuCtrl'
          }
        }
      })
      .state('main.login', {
        url: '/login',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/login.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })
      .state('main.questions', {
        url: '/questions',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/questions.html',
            controller: 'QuestionsCtrl'
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
      });
    $locationProvider.html5Mode(true);
});
