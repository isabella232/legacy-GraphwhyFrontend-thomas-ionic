'use strict';
angular.module('main')
.controller('MenuCtrl', function ( $scope, $http, $rootScope, $location, Facebook ) {


  $scope.loginFB = function () {
    Facebook.login(function(response){
      Facebook.getLoginStatus(function(response2) {
        if(response2.status === 'connected') {
          $location.path( '/main/question/graphwhy/1' );
        } else {
          //$location.path( '/main/question/profile' );
          $location.path( '/main/question/graphwhy/1' );
        }
      });
    })
  };
});



