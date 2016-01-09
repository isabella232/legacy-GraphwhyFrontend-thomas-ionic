'use strict';
angular.module('main')
.controller('QuestionCtrl', function ($scope, $location) {
  //var id = $stateParams.id; //use to do request
  //getrequest:GETQUESTION

  $scope.counter = 0;

  var question = [
    {
      title: 'How many dogs do you own?',
      options: ['1 dog', '2 dog', '3 dog', '4 dog', '5 dog']
    },
    {
      title: 'How many cats do you own?',
      options: ['1 cat', '2 cat', '3 cat', '4 cat', '5 cat']
    },
    {
      title: 'How many elephants do you own?',
      options: ['1 elephant', '2 elephants', '3 elephants', '4 elephants', '5 elephants']
    },
    {
      title: 'How many mice do you own?',
      options: ['1 mouse', '2 mice', '3 mice', '4 mice', '5 mice']
    }

  ];
  $scope.question = question[$scope.counter];
  $scope.next = function () {
    if ( $scope.counter > question.length - 2 ) {
      $location.path( 'main/questions' );
    } else {
      $scope.question = question[ ++$scope.counter ];
    }
  };
});

