/*JAVASCRIPT PARA NUESTRA APP*/


var app=angular.module(
    
                        'profesorApp', //nombre de la App
                        [] //para inyectar librerias
                        );


/*CONTROLADORES */

app.controller('profesorController', //nombre controlador
function($scope){   //la programacion del controlador


    //propiedad del modelo
        $scope.editando={};
        $scope.profesor= {
        nombre: "Gaizka Ugalde",
        bio: "Saludos estudiante, mi nombre es Gaizka Ugalde, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
        edad: 27,
        foto: "images/juancarlos.jpg"
    }


    //funciones


    $scope.editar=function(){

        console.trace('click boton editar');
        angular.copy($scope.profesor,$scope.editando);

    }
    
    $scope.cancelar=function(){

        console.trace('click boton cancelar');
      $scope.editando={};

    }


    $scope.guardar=function(){

        console.trace('click boton cancelar');
        angular.copy($scope.editando,$scope.profesor);

    }





});

app.controller('videoController', //nombre controlador
function(){   //la programacion del controlador

        this.video= {
        id:3,
        titulo:"Anuel AA, Daddy Yankee, Karol G, Ozuna & J Balvin - China (Video Oficial)",
        codigo:"0VR3dfZf9Yg",
        categoria:{
            id:3,
            nombre:"Musica"


        },
        usuario:{
        nombre:"Ramoncin",
        id:23
        },
       likes:5
    }

});