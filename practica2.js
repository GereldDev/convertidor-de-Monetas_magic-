

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

        }else if ( monto > 5000){

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

var quetzal = new moneda()
    quetzal.nombre = "Quetzal"
    quetzal.tipoDeCambio = 7.86

var cordobas = new moneda()
    cordobas.nombre = "cordobas"
    cordobas.tipoDeCambio = 35

function convertirMoneda(tipoDeMoneda){

var montoSeleccionado = document.getElementById('monto').value
    

    if (tipoDeMoneda == "Yenes"){

        yen.convertir(montoSeleccionado) 


    }else if(tipoDeMoneda == "Quetzal"){
        quetzal.convertir(montoSeleccionado) 
    }else if(tipoDeMoneda == "cordobas"){
        cordobas.convertir(montoSeleccionado)    
    }else{
        document.write("no es un numero")
    }
}

