angular.
  module('fruteriaApp').
  component('botonComponent', {  // This name is what AngularJS uses to match to the `<boton-component>` element.
  templateUrl: './componentes/boton/template.html',
  controller: function BotonController($scope) {

     console.log('BotonController');   

     $scope.titulo = "Boton para cambiar el color";
     $scope.colorClass = "btn btn-success";

     $scope.cambiarColor = function(){
        console.debug('click cambiarColor');
        if ( $scope.colorClass == "btn btn-primary"){
            $scope.colorClass = "btn btn-danger";
            $scope.titulo = "DANGER"
        }else{
            $scope.colorClass = "btn btn-primary";
            $scope.titulo = "PRIMARY"
        }
        
     };

   }
  });