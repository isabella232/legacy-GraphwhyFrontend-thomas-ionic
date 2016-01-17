'use strict';
angular.module('main')
.controller('MenuCtrl', function ( $scope, $http, $location, Facebook ) {
  //Main.getQuestions();
  //var obj = Main.getQuestions();

  $scope.loginFB = function () {
    Facebook.login( function (response) {
      Facebook.getLoginStatus( function (response2) {
        if (response.status === 'connected') {
          console.log(response2);
          $location.path( '/uptous/1' );
        } else {
          //$location.path( '/main/question/profile' );
          $location.path( '/uptous/1' );
        }
      });
    });
  };
});
