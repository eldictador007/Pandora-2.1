//
const multiplica=(a,b) => a*b
let cliente=[]
let canasto=[]
let total=0

function Producto(id,nombre,precio,stock){
    this.id=id
    this.nombre=nombre
    this.precio=precio 
    this.stock=stock
}

let paseo= new Producto(1,"Paseo",4,99)
let noche= new Producto(2,"Noche",6,99)
let heli= new Producto(3,"Helicoptero",86,6)


filtroEdad()
while(opcion.toUpperCase() !='ESC'&&opcion !=''){
    if(opcion.toUpperCase()=='PASEO'){
        total+=multiplica(paseo.precio,cantidad())
        carrito(opcion)
    }
    else if(opcion.toUpperCase()=='ALOJAMIENTO'){
        total+=multiplica(noche.precio,cantidad())
       // canasto.push(opcion)
        carrito(opcion)
    }
    else if(opcion.toUpperCase()=='HELICOPTERO'){
        total+=multiplica(heli.precio,cantidad())
       // canasto.push(opcion)
        carrito(opcion)
    }
    else{
        error()        
    }
    opcion =compra()    
}

if(total > 0){
    alert(`\n ENHORABUENA ${cliente} !!\n Compraste: \n- ${canasto.join(" \n- ")} \npor un total de: u$s ${total}\n\n `)
}
else{
    alert('\n Gracias por tu visita, vuelve pronto!')
}
function carrito(prod){
    if (canasto.includes(this.opcion)){
        console.log(opcion)
        
    }
    else{
    canasto.push(prod)
    }
}

function filtroEdad(){
    let edad=prompt('\n Ingresa tu edad:')
    if (edad>17){
        cliente[0]=prompt('\b Hola, como te llamas?\n')
        opcion=compra()
    }
    else{alert('\n Lo siento, debes ser mayor de edad para acceder al sitio.')}
}
function compra(){
    opcion= prompt(`\n Ingresar una opcion:\n\n - Paseo (u$s ${paseo.precio} por persona)\n - Alojamiento (u$s ${noche.precio} por noche en base simple)\n - Helicoptero (u$s ${heli.precio} por persona)\n\n Para finalizar tu compra haz click en "Aceptar" o escribe "ESC" para salir`)
    return opcion
}
function cantidad(){
    return parseInt(prompt('\n Digitar la cantidad que deseas comprar:'))
}
function error(){
    //Mensaje temporal, es el FIN
    alert(`\n Mmmh algo fallo, intentalo nuevamente.`)
}



// if (cliente.length>0){
//     alert('compra')
// }
// else {error()}


console.log(cliente)
console.log(opcion)
console.log(canasto)
// function cantidad(pruducto,precio){
//     let pedido=prompt(`Cuantas unidades desea llevar?`)
//     multiplica(precio,parseInt(pedido))
//     return parseInt(pedido)
// }

// function sumarCompra(){
//     let carrito[]
//     console.log('array carrito de comprass')
// }
function mostrarCompra(){
    document.write('graciass capo\nmira tu compra\nhtml')
}


