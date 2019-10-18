app.controller('formularioController', ['$scope', 'servicioConstantes',
                                      function($scope, servicioConstantes){


    console.trace('formularioController');    

    $scope.titulo = "Formulario";


    $scope.formData = {};
    /*
    $scope.formData = {
        "email" : servicioConstantes.email,
        "nombre" : servicioConstantes.autor
    };*/


    $scope.postear = ()=>{
        console.trace('formulario sumitado %o', $scope.formData );
    }

    $scope.changeStiles = (form)=>{
        console.trace('formulario de la vista %o', form );
    }

}]);