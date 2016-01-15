'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'facebook'
])
.run( function ($rootScope) {

})
.config(function ($stateProvider, $urlRouterProvider, FacebookProvider) {
  // ROUTING with ui.router
  FacebookProvider.init('872274976224449');
  $urlRouterProvider.otherwise('/main/profile');
  $stateProvider
    .state('main', {
      url: '/main',
      abstract: true,
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
        url: '/question/:id/finish',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/finish.html'
            //controller: 'MenuCtrl as menu'
          }
        }
      })
      .state('main.question', {
        url: '/question/:id/:qnum',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/question.html',
            controller: 'QuestionCtrl'
          }
        }
      })
      .state('main.profile', {
        url: '/profile',
        views: {
          'pageContent': {
            templateUrl: 'main/templates/profile.html',
            controller: 'MenuCtrl'
          }
        }
      });
});

