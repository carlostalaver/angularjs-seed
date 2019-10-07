'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ["$scope", function($scope) {
  var init = function(){
    $scope.data = {
      paymentType: '', 
      carNumber: '', 
      nro_autorizacion: '', 
      nro_comprobante: '', 
      email: '', 
      send: false
    };
  };


  // OPTION TIPO DE PAGO
  $scope.opciones = {
    "1": {
      "id": "E", 
      "text": "Efectivo"
    }, 
    "2": {
      "id": "D", 
      "text": "Tarjeta de Débito"
    }, 
    "3": {
      "id": "C", 
      "text": "Tarjeta de Crédito"
    }
  }; 

  var registroPago = function(){
    $scope.registroPagoOK= true; 
  };

  $scope.submitForm2 = function(oForm){
    $scope.data.send = true; 
    if(oForm.$valid){
      registroPago();
    } else {
      alert('Error');
    }
  };

  init();
}]);