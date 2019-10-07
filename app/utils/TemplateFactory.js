angular.module('myApp.view1')
  .factory('TemplateFactory', [function($window){
    let data = {
      nombre: '',
      paterno: '',
      materno: '',
      edad: ''
    }
  }])