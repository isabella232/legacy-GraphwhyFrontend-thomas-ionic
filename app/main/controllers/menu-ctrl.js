'use strict';
angular.module('main')
.controller('MenuCtrl', function ( $scope, $http, $rootScope, $location ) {


  $scope.loginFB = function () {
    var id = '872274976224449';
    var url = encodeURIComponent("http://2ba8a84a.ngrok.io");
    window.location = 'https://www.facebook.com/dialog/oauth?client_id=' + id + '&redirect_uri=' + url + '&response_type=token&scope=email';
  };
  $scope.successFB = function (token) {
    var str = 'https://graph.facebook.com/me?access_token=' + token + '&fields=email';
    $http.get( str ).then( function (data) {
      $rootScope.userdata = data.data;
      $rootScope.counter = 0;
      $location.path( "/main/question/graphwhy/1" );
    });
  };
  if($rootScope.token){
    $scope.successFB($rootScope.token);
  }
});
