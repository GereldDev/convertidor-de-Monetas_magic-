

function moneda(){


    this.nombre
    this.tipoDeCambio
    this.mensaje = [
                "No hay yenes para ti honorable usuario",
                "Monto demasiado alto, pase a nuestra sucursal",
                "El 13 es de mala suerte, intenta otro numero"
              ]


    this.convertir = function(monto){


        conversionResultado = monto * this.tipoDeCambio

        var mensajeHTML 

        if(conversionResultado <=0){

            mensajeHTML  = this.mensaje[0]

        }else if ( monto == 13){

            mensajeHTML  = this.mensaje[2]

        }else if ( monto > 1000){

            mensajeHTML  = this.mensaje[1]

        }else{

            mensajeHTML = monto + " dolares son " + conversionResultado + " " + this.nombre


        }




        document.getElementById('resultadoDelCambio').innerHTML = mensajeHTML 


    }

}

var yen = new moneda()
    yen.nombre = "Yenes"
    yen.tipoDeCambio = 99.5


function convertirMoneda(tipoDeMoneda){


    var montoSeleccionado = document.getElementById('monto').value
    yen.convertir(montoSeleccionado) 
}

