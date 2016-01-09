'use strict';
angular.module('main')
.controller('QuestionsCtrl', function ($scope) {
  //getrequest:GETQUESTIONS
  var Questions = [
    {
      title: 'dog',
      description: 'cats',
      id: '3232',
      finished: true
    },
    {
      title: 'cat',
      description: 'dogs',
      id: '3232',
      finished: true
    },
    {
      title: 'mouse',
      description: 'description',
      id: '3232',
      finished: false
    },
    {
      title: 'elephant',
      description: 'cock',
      id: '3232',
      finished: false
    },
    {
      title: 'penis',
      description: 'breath',
      id: '3232',
      finished: false
    },
    {
      title: 'fuck',
      description: 'beaners',
      id: '3232',
      finished: false
    },
    {
      title: 'niggers',
      description: 'spics',
      id: '3232',
      finished: false
    }
  ];
  $scope.questions = Questions;
});

