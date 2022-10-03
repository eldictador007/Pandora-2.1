//

let welcome=true

function Objeto(id,nombre,precio,stock){
    this.id=id
    this.nombre=nombre
    this.precio=precio 
    this.stock=stock
}

const obj1= new Objeto(1,"Uno",6,53)

console.log(obj1)