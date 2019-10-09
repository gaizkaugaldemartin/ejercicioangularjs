/* javascript para nuestra App */

var app = angular.module(
                            'profesorApp', // nombre de la App
                            []             // para inyectar librerias
                         );


 /* Controladores */    
 
 app.controller(
     'profesorController',      // nombre controlador
     function( $scope ){                // la programacion del controlador


            // propiedades del modelo
            $scope.animacion ="";
            $scope.esVisible=false;
            $scope.editando = {};      
            $scope.profesor = {
                nombre: "Profesor Frink",
                bio: "Saludos estudiante, mi nombre es Frink, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
                edad: 67,
                foto: "images/juancarlos.jpg"
            };




            // funciones


             $scope.editar = function(){
                console.trace('click boton editar');
                $scope.animacion= "animated fadeInDown";
                $scope.esVisible=true;
                angular.copy( $scope.profesor, $scope.editando);
            }

            $scope.cancelar = function(){
                console.trace('click boton cancelar');
                $scope.animacion= "animated fadeOutDown";
                $scope.editando = {};
               // $scope.esVisible=false;
               $timeout(function(){

                $scope.esVisible=false;
                $scope.animacion= "";

            },1000);

          

       


            }
            

            $scope.guardar = function(){
                console.trace('click boton guardar');
                $scope.animacion= "animated fadeOutDown";
               
                angular.copy( $scope.editando, $scope.profesor);
                $timeout(function(){

                    $scope.esVisible=false;
                    $scope.animacion= "";
    
    
                },1000);

          


            }


 });
 // end profesorController


 app.controller( 'videoController', function($scope,$timeout){  

          $scope.animacion="";

           // variable del modelo
           $scope.video = {
               id: 3,
               nombre: "Anuel AA, Daddy Yankee, Karol G, Ozuna & J Balvin - China (Video Oficial)",
               codigo: "0VR3dfZf9Yg",
               categoria: {
                    id: 3,
                    nombre: "Musica"
               },
               usuario: {
                   nombre: "Ramoncion",
                   id: 23
               },
               likes: 5
            };

         
         
            //funciones



            $scope.sumarLike = function(){

                console.trace('click boton like');
                $scope.animacion="animated pulse";
                $scope.video.likes++;
                $timeout(function(){

                    $scope.animacion="";


                },1000);



            };
            
            

});


// end videoController


app.controller( 'frutasController', function($scope){  

  
      $scope.frutas=["Manzana","Pera","Fresas"];
      $scope.frutasJson={"frutas":[

        {

            "nombre":"Manzana",
            "color":"roja"

        },
        
        {

            "nombre":"Pera",
            "color":"roja"
            
        },

             
        {
            "nombre":"Fresas",
            "color":"roja"
            
        }




      ]};
      
      $scope.selecccionado=function(fruta,event){

        console.log('click'+fruta);
        event.target.style.background='red';


      }

});


// end frutasController