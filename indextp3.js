const pizzas=[
    {id:1, nombre:"pizza muzarella", ingredientes:["queso","tomate","cebolla"], precio:890},
    {id:2, nombre:"pizza napolitana", ingredientes:["salsa","tomate","queso","oregano"], precio:560},
    {id:3, nombre:"pizza carbonara", ingredientes:["bacon","huevo","queso"], precio:1100},
    {id:4, nombre:"pizza margarita", ingredientes:["ajo","tomate","albahaca","queso"], precio:1300},
    {id:5, nombre:"pizza fugazzeta", ingredientes:["cebolla","oregano","aceituna","mozarella"], precio:890},
    {id:6, nombre:"pizza hawaiana", ingredientes:["piña","jamon","salsa"], precio:1200},
 ]


const h2=document.querySelector('h2')
const h4=document.querySelector('h4')
const input=document.querySelector('input')
const button=document.querySelector('button')
const buttontext=document.createTextNode('Enviar')
button.appendChild(buttontext)


button.addEventListener('click',(e)=>{

const buscarIdPizza=pizzas.find(pizzas=>pizzas.id==input.value);
if(buscarIdPizza!=undefined){
const pizzaNombre=document.createTextNode(buscarIdPizza.nombre);
const pizzaPrecio=document.createTextNode(buscarIdPizza.precio);
h2.appendChild(pizzaNombre);
h4.appendChild(pizzaPrecio);
}

else{
alert('No se encontro la pizza')
}


})



