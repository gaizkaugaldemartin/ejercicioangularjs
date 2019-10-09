angular.
  module('componentesApp'). //nombre App
  component('componenteBoton', { //nombre componente, para usarlo <saludo-usuario></saludo-usuario>
    templateUrl: './components/boton/template.html',
    controller: function BotonController() {
        console.trace('BotonContoller');
        this.nombre = 'hola';
        this.contador=0;

        //funcion

        this.sumar=function(){

            console.trace('click sumar');
            this.contador++;



        };
    }
  });