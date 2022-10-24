
//

const multiplica=(a,b) => a*b

//
let cliente=[]
let total=0
//

let paseo= new Product(1,"Paseo",4,99)
let noche= new Product(2,"Noche",6,99)
let heli= new Product(3,"Helicoptero",86,6)
let caballo= new Product(4,"Cabalgata",5,99)
let resto= new Product(5,"Restaurante",2,99)
let cuatri= new Product(6,"Cuatriciclo",35,8)

const kiosk = [paseo,noche,heli,caballo,resto,cuatri]

//

let catalog= document.getElementById('items')
let cartList= document.getElementById('cart')
let btnEmpty= document.getElementById('btn-empty')
let totalCart= document.getElementById('total')
let cart=[]

btnEmpty.addEventListener('click',emptyCart)
loadCart()

kiosk.forEach((prod)=>{
    //
    let cardBody= document.createElement('div')
    cardBody.classList.add('card','my-2','text-white','bg-secondary')
    //
    let cardTitle= document.createElement('h4')
    cardTitle.classList.add('card-title')
    cardTitle.innerText= prod.name
    //
    let cardStock= document.createElement('p')
    cardStock.classList.add('card-text')
    cardStock.innerText= `Stock disponible: ${prod.stock}`
    //    
    let cardPrice= document.createElement('h6')
    cardPrice.classList.add('card-text')
    cardPrice.innerText= ` $$ ${prod.price} por persona.`
    //    
    let cardBtn= document.createElement('button')
    cardBtn.classList.add('btn-aqua','btn')
    cardBtn.innerText= `Agregar al Carrito`
    cardBtn.setAttribute('mark',prod.id)
    cardBtn.addEventListener('click', addProdToCart)
    //
    cardBody.append(cardTitle,cardStock,cardPrice,cardBtn)
    catalog.append(cardBody)    
}
)

function addProdToCart(e){
    cart.push(e.target.getAttribute('mark'))
    renderCart()
}
function renderCart(){
    cartList.innerHTML=''
    saveCart()
    let newCart= [...new Set(cart)]
    newCart.forEach((product)=>{
        let item= kiosk.filter((prod)=>{
            return prod.id=== parseInt(product)
        })
        let quantity= cart.reduce((total,id)=>{
            return id=== product ? total +=1:total
        },0)    
    let line= document.createElement('li')
    line.classList.add('list-group-item','text-center','mx-2')
    line.innerText= `${quantity}x ${item[0].name} = $${item[0].price} c/u  `
    let btnDelete= document.createElement('button')
    btnDelete.classList.add('btn','btn-rosa','px-1','my-2')
    btnDelete.innerText='Quitar'
    btnDelete.dataset.item= product
    btnDelete.addEventListener('click', deleteProd)
    line.append(btnDelete)
    cartList.append(line)
    })
    totalCart.innerText= ` $${totalPrice()}`
}
function deleteProd(e){
    let id= e.target.dataset.item
    cart= cart.filter((cartId)=>{
        return cartId != id
    })
    renderCart()
}
function emptyCart(){
    cart=[]
    renderCart()
}
function Product(id,name,price,stock){
    this.id=id
    this.name=name
    this.price=price 
    this.stock=stock
}
function totalPrice(){
    return cart.reduce((total,product)=>{
        let item= kiosk.filter((prod)=>{
            return prod.id=== parseInt(product)
        })
        return parseInt(total)+ item[0].price
    },0)
}
function saveCart(){
    localStorage.setItem('cart',JSON.stringify(cart))
}
function loadCart(){
    if(localStorage.getItem('cart') != null){
        cart= JSON.parse(localStorage.getItem('cart'))
    }
    renderCart()
}
