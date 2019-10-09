/* javascript para nuestra App */

var app = angular.module(
                            'fruteriaApp', // nombre de la App
                            []             // para inyectar librerias
                         );


 /* Controladores */    
 



app.controller( 'frutasController', function($scope){  

  
      $scope.frutas=["frutas"];
      $scope.frutasJson={"frutas":[

        {

            "nombre":"Manzana",
            "imagen":"images/manzana.jpg",
            "precio":"1,20",
            "cantidad":"0",
            "color":"verde"

        },
        
        {

            "nombre":"Pera",
            "imagen":"images/pera.jpg",
            "precio":"1,25",
            "cantidad":"0",
            "color":"verde"
            
        },

             
        {
            "nombre":"Fresas",
            "imagen":"images/fresa.jpg",
            "precio":"1,50",
            "cantidad":"0",
            "color":"marron"
            
        }




      ]};

   //funciones

   $scope.incrementar=function(){

    console.log("click incrementar: %o",fruta);
    fruta.cantidad++;



  }
  
  $scope.decrementar=function(){

    console.log("click decrementar: %o",fruta);
    
    if(fruta.cantidad>0){

        fruta.cantidad--;

    }



  }


      
      $scope.selecccionado=function(fruta,event){

        console.log('click'+fruta);
        event.target.style.background='red';


      }

      $scope.ordenar=function(){

        console.log("click decrementar: %o",fruta);
        
        if(fruta.cantidad>0){
    
            fruta.cantidad--;
    
        }
    
    
    
      }





});


// end frutasController