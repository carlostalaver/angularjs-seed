angular.module('myApp.view1')
  .controller('View1Ctrl', ['UtilsFactory', '$scope', function(UtilsFactory, $scope){

    $scope.data = [
      {
        nombre:'Carlos',
        apellido: 'Talavera'
      },
      {
        nombre:'Gabriel',
        apellido: 'Talavera'
      }
    ]


    $scope.windowopen = function(url){
      UtilsFactory.windowopen(url);
    }
  }])