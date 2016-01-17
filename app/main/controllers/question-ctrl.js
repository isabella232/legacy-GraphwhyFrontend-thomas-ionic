'use strict';
angular.module('main')
.controller('QuestionCtrl', function ($scope, $location, $rootScope, $stateParams, $http, Facebook, Main) {
  //var id = $stateParams.id; //use to do request
  $scope.answers = [];
  $scope.title = "";
  $rootScope.counter++;
  Facebook.api('/me', {fields: 'email'}, function (response) {
    console.log(response.email);
  });


  $scope.counter = parseInt($stateParams.qnum) + 1;


  Main.getQuestions().then(function(val){
    $scope.questions = val.data.questions;
    if($scope.counter > $scope.questions.length+1){
      $location.path( '/uptous/finish' );
    }else{
      $scope.question = $scope.questions[$scope.counter - 2];
    }
  })
});

