angular.module('myApp.view1')
  .factory('UtilsFactory', ['$window', function($window){
    let windowopen = function(url){
      $window.open(url, '_blank');
    }

    return {
      windowopen: windowopen
    }
  }])