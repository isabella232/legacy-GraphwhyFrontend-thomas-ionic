'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'nvd3'
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/signup');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/menu.html',
      //controller: 'MenuCtrl as menu'
    })
      .state('main.signup', {
        url: '/signup',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/signup.html',
            // controller: '<someCtrl> as ctrl'
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
      .state('main.question', {
        url: '/question/:id',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/question.html',
            controller: 'QuestionCtrl'
          }
        }
      })
      .state('main.votes', {
        url: '/votes',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/votes.html',
            controller: 'MenuCtrl as menu'
          }
        }
      })
      .state('main.profile', {
        url: '/profile',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/profile.html',
            //controller: 'DebugCtrl as ctrl'
          }
        }
      });
});

