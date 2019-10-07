angular.module('myApp.view1')
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
 'use strict'; 


  .state('main.login', {
   url: '/view1',
   views: {
    'main': {
     templateUrl: 'view1/view1.html',
     controller: 'View1Ctrl',
     pantalla: 'Login'
    }
   }
  })
 
 $urlRouterProvider.otherwise('/view1');
}]);
