/* javascript para nuestra App */

var app = angular.module(
                            'localizacionApp', // nombre de la App
                            []             // para inyectar librerias
                         );


 /* Controladores */    
 


app.controller( 'localizaController',['$scope','$http', function($scope,$http){
  
    //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
      
    $scope.localizar = function(){
      console.trace('click boton localizar');
      geoplugin_request
   
  }
  
  
  }]);
  
// end localizaController

