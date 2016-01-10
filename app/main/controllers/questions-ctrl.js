'use strict';
angular.module('main')
.controller('QuestionsCtrl', function ($scope) {
  //getrequest:GETQUESTIONS
  var Questions = [
    {
      title: 'The US national debt',
      description: '6 question survey conducted on the De Anza College campus for Up to Us',
      id: '3232',
      finished: true
    },
    {
      title: 'Green Party',
      description: 'Coming Soon, Hosted by the De Anza Green Party',
      id: '3232',
      finished: false
    },
    {
      title: 'Libertarian Party',
      description: 'Coming Soon, Hosted by the Libertarian Party',
      id: '3232',
      finished: false
    },
    {
      title: 'The De Anza Student Body',
      description: 'Coming Soon, Hosted by the De Anza Network',
      id: '3232',
      finished: false
    }
  ];
  $scope.questions = Questions;
});

