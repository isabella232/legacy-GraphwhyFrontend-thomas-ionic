'use strict';
angular.module('main')
.controller('QuestionCtrl', function ($scope, $location, $rootScope, $stateParams) {
  //var id = $stateParams.id; //use to do request
  //getrequest:GETQUESTION

  $rootScope.counter++;

  var questions = [
    {
      title: 'Are you concerned about the US national debt?',
      options: ['Yes, absolutely', 'Yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Would you spend an hour a month reviewing government policies?',
      options: ['Yes, absolutely', 'Yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Have you learned about US national debt in a classroom?',
      options: ['yes, absolutely', 'yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Do you trust federal government policy makers?',
      options: ['yes, absolutely', 'yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Do you know approximate amount of US national debt?',
      options: ['yes, absolutely', 'yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Do you know why the US is in debt?',
      options: ['yes, absolutely', 'yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Do you support legalizing and taxing of recreational drugs?',
      options: ['yes, absolutely', 'yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Do you support a lower miliary budget?',
      options: ['yes, absolutely', 'yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Do you support stricter tax laws for US corporations',
      options: ['yes, absolutely', 'yes, mostly', 'yes, slightly', 'No', 'none of the above']
    },
    {
      title: 'Do you support internation free trade agreements',
      options: ['yes, absolutely', 'yes, mostly', 'yes, slightly', 'No', 'none of the above']
    }
  ];
  $scope.counter = parseInt($stateParams.qnum)+1;
  if($scope.counter>questions.length){
    $location.path( "/main/question/graphwhy/finish" );
  }
  else{
    $scope.question = questions[$scope.counter-2];
  }

});

