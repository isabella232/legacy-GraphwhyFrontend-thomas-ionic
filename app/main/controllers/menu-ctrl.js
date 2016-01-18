'use strict';
angular.module('main')
.controller('MenuCtrl', function ( $scope, $http, $location, Facebook ) {
  //Main.getQuestions();
  //var obj = Main.getQuestions();

  $scope.loginFB = function () {
    $location.path( '/uptous/1' );
    /*
    Facebook.login( function (response) {
      Facebook.getLoginStatus( function (response2) {
        if (response.status === 'connected') {
          $location.path( '/uptous/1' );
        } else {
          $location.path( '/main/question/profile' );
        }
      });
    });
    */
  };
});
