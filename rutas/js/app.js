var app = angular.module('angularApp',['ngRoute','ngSanitize']);


/**
 * Servicio para Constantes
 */

 app.constant("servicioConstantes", {
                                      "titulo": "AngularApp",
                                      "idioma": "es-Es",
                                      "version": "1.0",
                                      "autor": "Gaizka Ugalde Martin",
                                      "github": "https://github.com/gaizkaugaldemartin/ejercicioangularjs"
                                    } );

/**
 *  Servicio o Provider
 */

 app.service("cancionProvider", CancionProvider );
 app.service("rectanguloService",Rectangulo);
  app.service('PokemonProvider', PokemonProvider);

/**
 * Ejemplo Servicio a traves de una Clase
 */

 // Clase Rectangulo
 function Rectangulo() {
  this.ancho=0;
  this.alto=0;
 
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

/**Filtro Personalizado para Capitalizar la 1 letra de un String */





//definir filtro en la app

app.filter("capitalizar", function(){


  return function(cadena){

  if(cadena != undefined && typeof cadena == 'string'){

    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
    
    }else{
    
      return "";
    
    }
    }


});