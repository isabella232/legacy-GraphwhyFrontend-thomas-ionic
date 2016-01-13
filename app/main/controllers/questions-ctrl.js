'use strict';
angular.module('main')
.controller('QuestionsCtrl', function ($scope, $rootScope) {
  //getrequest:GETQUESTIONS
  var Questions = [
    {
      title: 'The US national debt',
      description: '6 question survey conducted on the De Anza College campus for Up to Us',
      id: '3232',
      finished: true
    }
  ];

  if ($rootScope.userdata) {
    $scope.email = $rootScope.userdata.email;
  }

  $scope.questions = Questions;
});

