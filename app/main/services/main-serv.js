'use strict';
angular.module('main')
.service('Main', function ($log, $timeout, $http) {
  $log.log('Hello from your Service: Main in module main');
  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };
  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';
    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };
  this.getQuestions = function () {
    return $http.get('http://107.170.211.166:3010/api/lists/uptous');
  };
});
