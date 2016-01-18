'use strict';
angular.module('main')
.controller('ResultsCtrl',function ($scope, $stateParams, Main) {


  $scope.options = {
    chart: {
      type: 'pieChart',
      height: 500,
      x: function (d) { return d.key;},
      y: function (d) {return d.y;},
      showLabels: false,
      duration: 500,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      legend: {
        margin: {
          top: 10,
          right: 35,
          bottom: -30,
          left: 0
        }
      }
    }
  };
  $scope.data = [
  ];
  function convertToD3(data){
    var temparr = [];
    for(var i = 0; i < data.length; i++){
      temparr.push({
        key: data[i].answer,
        y: Math.floor((Math.random() * 10) + 1)
      });
    }
    console.log(temparr)
    console.log($scope.data)
    return temparr;
  }


  $scope.answers = [];
  $scope.title = '';
  $scope.counter = parseInt($stateParams.qnum) + 1;
  $scope.bakcounter = $scope.counter-2;

  Main.getQuestions().then(function (val) {
    $scope.questions = val.data.questions;
    if ($scope.counter > $scope.questions.length + 1) {
      //$location.path( '/uptous/finish' );
    } else {
      $scope.question = $scope.questions[$scope.counter - 2];
      $scope.data = convertToD3($scope.question.answers);
    }
  });

});
