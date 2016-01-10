'use strict';
angular.module('main')
.controller('QuestionCtrl', function ($scope, $location) {
  //var id = $stateParams.id; //use to do request
  //getrequest:GETQUESTION

  $scope.counter = 0;

  var question = [
    {
      title: 'Are you concerned about the US national debt?',
      options: ['Yes, absolutely', 'Yes', 'No', 'No, not at all', 'none of the above']
    },
    {
      title: 'Have you learned about US national debt in a classroom?',
      options: ['yes, absolutely', 'yes', 'no', 'No, not at all', 'none of the above']
    },
    {
      title: 'Do you trust federal government policy makers?',
      options: ['yes, absolutely', 'yes', 'no', 'No, not at all', 'none of the above']
    },
    {
      title: 'Do you support legalizing and taxing all recreational drugs?',
      options: ['yes, absolutely', 'yes', 'no', 'No, not at all', 'none of the above']
    },
    {
      title: 'Do you know approximate amount of US national debt?',
      options: ['yes, absolutely', 'yes', 'no', 'No, not at all', 'none of the above']
    },
    {
      title: 'Do you know why the US is in debt?',
      options: ['yes, absolutely', 'yes', 'no', 'No, not at all', 'none of the above']
    },
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

