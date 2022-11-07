//

let welcome=true
sessionStorage.clear() //  CUIDADO *-*-*-*-*-*-*  aH


//  BASE
function Objeto(id,nombre,precio,stock){
    this.id=id
    this.nombre=nombre
    this.precio=precio 
    this.stock=stock
}

const obj1= new Objeto(1,"Uno",6,53)


//  Ocultar

function hideDom (){
    document.getElementById('id').style.display="none"
}

// hideDom("contactoDiv")

//  Mostrar o Toggle ^^^
//

let age= prompt(`fecha`)

sessionStorage.setItem('inicio',age)

console.log(Date())

let time= new Date()
//
console.log(Date.now())
console.log(time)


Toastify({
    text: "This is a toast",
    duration: 3000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
  

//  

// Tarea1

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
