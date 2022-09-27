//

function cantidad(){
    return parseInt(prompt(" Digitar la cantidad que deseas comprar:"))
}
function compra(){
    return prompt(" Ingresar una opcion:\n\n - Paseo (u$s "+precioPaseo+" por persona)\n - Alojamiento (u$s "+precioAloja+" por noche en base simple)\n - Helicoptero (u$s "+precioHeli+" por persona)\n\n Escribe 'ESC' para salir")
}
function error(){
    alert(" '" +opcion+ "' " + "no es una opcion valida, intentalo nuevamente.")
}
let total=0

const precioPaseo=4
const precioAloja=6
const precioHeli=8

let opcion=compra()
while(opcion.toUpperCase() !="ESC"&&opcion !=""){
    if(opcion.toUpperCase()=="PASEO"){
        total+=(precioPaseo*cantidad())
    }
    else if(opcion.toUpperCase()=="ALOJAMIENTO"){
        total+=(precioAloja*cantidad())
    }
    else if(opcion.toUpperCase()=="HELICOPTERO"){
        total+=(precioHeli*cantidad())
    }
    else{
        error()        
    }
    opcion =compra()    
}

if(total > 0){
    alert("\n El precio total es: u$s " + total+"\n\n En minutos recibiras un correo confirmando tu compra.\n Gracias por tu confianza!")
}
else{
    alert("\n Gracias por tu visita, vuelve pronto!")
}
