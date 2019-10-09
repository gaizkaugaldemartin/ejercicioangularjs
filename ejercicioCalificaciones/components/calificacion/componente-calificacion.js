angular.
  module('componentesApp'). //nombre App

       
        component('componenteCalificacion', { //nombre componente, para usarlo <saludo-usuario></saludo-usuario>
          templateUrl: './components/calificacion/template.html',

          bindings:{

            pnota:'@' //parametro de entrada
          },
          controller: function CalificacionesController() {
              console.trace('CalificacionesContoller');
             this.NOTA_MAX=10;
             this.NOTA_MIN=0;
              this.nota = 5;
              this.texto = 'suficiente';
              this.contador=0;
      

              this.$onInit=function(){

                  console.trace('CalificacionController Init');
                  this.nota=this.pnota;
                  this.cambiarTexto();


              }

        //funcion

        this.sumar=function(){

            console.trace('click sumar');
            
            if(this.nota<NOTA_MAX){

              this.nota++;
              this.cambiarTexto();
            }



        };

        this.restar=function(){

          console.trace('click restar');
          if(this.nota<NOTA_MIN){

            this.nota--;
            this.cambiarTexto();

          }



      };


      this.cambiarTexto=function(){

        console.trace('cambiarTexto');
      

        switch(this.nota){

          case 0:
           case 1:
        case 2:
         case 3:
          case 4:
          this.texto="Suspendido";
          break;
           case 5:
              case 5:
                  case 5:
                      case 5:
                          case 5:


        }

        }



    };

    }
  });