/* javascript para nuestra App */

var app = angular.module(
                            'fruteriaApp', // nombre de la App
                            []             // para inyectar librerias
                         );


 /* Controladores */    
 


app.controller( 'frutasController', function($scope){
    $scope.total=0; 
    $scope.frutas=["Manzanas","Pera","Kiwi","Platano"];
    $scope.frutasJson={"frutas":[
        {
            "img":"https://supermercado.eroski.es/images/2388676.jpg",
            "nombre":"Manzana",
            "cantidad":0,
            "precio":2.96
        },
        {   
            "img":"https://supermercado.eroski.es/images/17210.jpg",
            "nombre":"Pera",
            "cantidad":0,
            "precio":1.95
        },
        {   
            "img":"https://supermercado.eroski.es/images/12063319.jpg",
            "nombre":"Kiwi",
            "cantidad":0,
            "precio":1.93
        }


    ]};


$scope.aumentarCantidad = function(fj){
    console.log("seleccionado:" + fj.cantidad );
    fj.cantidad++;
}

$scope.reducirCantidad = function(fj){
    console.log("seleccionado:" + fj.nombre );
    if(fj.cantidad>0){
        fj.cantidad--;
    }
   
}

$scope.sumarTotal = function(fj){
    console.log("seleccionado:" + fj.nombre );
    $scope.total += fj.cantidad*fj.precio; 
    fj.cantidad=0;
    console.log("total " + $scope.total);
}


$scope.restarTotal = function(){
    $scope.total=0;
    
}

});
// end frutasController

