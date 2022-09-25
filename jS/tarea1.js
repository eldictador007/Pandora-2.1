//

function cantidad(){
    return parseInt(prompt(" Digitar la cantidad que desea comprar:"))
}
function compra(){
    return prompt(" Ingresar una opcion:\n - Paseo\n - Alojamiento\n - Helicoptero\n Escribe 'ESC' para salir")
}
function error(){
    alert(" '" +opcion+ "' " + "no es una opcion valida, intentalo nuevamente.")
}
let total=0

const precioPaseo=4
const precioAlojamiento=6
const precioHeli=8

let opcion=compra()
while(opcion.toUpperCase()!="ESC"){
    if(opcion.toUpperCase()=="PASEO"){
        alert(" El precio por persona es "+precioPaseo)
        total+=(precioPaseo*cantidad())
    }
    else if(opcion.toUpperCase()=="ALOJAMIENTO"){
        alert(" El precio por noche es "+precioAlojamiento)
        total+=(precioAlojamiento*cantidad())

    }
    else if(opcion.toUpperCase()=="HELICOPTERO"){
        alert(" El precio por persona es "+precioHeli)
        total=total+(precioHeli*cantidad())

    }
    else{
        error()        
    }
    opcion =compra()
    
}

if(total != 0){
    alert("El precio total es: " + total)
}
else{
    alert("Gracias por su visita!")
}
