'use strict';
angular.module('main')
.controller('MenuCtrl', function ( $scope, $http, $rootScope, $location ) {


  $scope.loginFB = function () {
    var id = '872274976224449';
    var url = encodeURIComponent("http://localhost:3000");
    window.location = 'https://www.facebook.com/dialog/oauth?client_id=' + id + '&redirect_uri=' + url + '&response_type=token&scope=email';
  };
  $scope.successFB = function (token) {
    var str = 'https://graph.facebook.com/me?access_token=' + token + '&fields=email';
    $http.get( str ).then( function (data) {
      $rootScope.userdata = data.data;
      $location.path( "/main/questions" );
    });
    
  };
  if($rootScope.token){
    $scope.successFB($rootScope.token);
  }

});
