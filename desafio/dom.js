//funciones Flechas =>

/*

var sumar = function(){ 
 
    console.log('hola a todos')

}


var sumar = (a,b) => 4

*/


//Objetos literales... JSON
/*
var alumno = {

    //key     Valor
    nombre: 'Cristian',
    apellido: 'Moran',
    edad: 38,
    //Metodos...acciones
    loge: function(){
        console.log('hola soy un metodo')
    }


}
console.log(alumno)
console.log(alumno.apellido)
console.log(alumno.loge())

console.log()

alumno.loge()

*/
//Document Objet Model..DOM

/*

body
h1
span
p
div
main
footer
form


*/


//console.log(document)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all)

//console.log(document.all[10])

//document.all[10].textContent='hola probando'
//id... clase..
//console.log(document.getElementById('main-header')) 

//console.log(document.getElementById('header-title')) 

//.textContent ='Hola'

/*var encabezado = document.getElementById('header-title')

var Alejo = prompt('ingrese su edad')


if(Alejo>25) {

    encabezado.textContent = 'Puede ver el contenido' //imprime todo..<h5> hola pronbando 


}else{

    encabezado.textContent = 'No puede ver .. pague por ver' //imprime todo..<h5> hola pronbando 


}*/

let bottonColor = document.getElementById('color');
let Items = document.getElementById('items');
let cantidadDeItems=Items.childElementCount;
let li=document.getElementById('items').getElementsByTagName('li');

const colores=()=>{fetch('https://www.colr.org/json/schemes/random/7?scheme_size_limit=>5')
.then((response) =>response.json())
.then(data=>showcolors(data.schemes[0].colors))
.catch(error => console.error(error))};

bottonColor.addEventListener('click',()=>colores());

const showcolors = (colores)=>{
    let cantidadDeItems=Items.childElementCount;
    let c1=getRandomArbitrary(0,2);
    let c2=getRandomArbitrary(3,5);
  for (var i=0;i<=cantidadDeItems;i++){
    if ((i%2)==1) {
        li[i].style.backgroundColor="#"+colores[c1];
        li[i].style.color="white";
    }else{
        li[i].style.backgroundColor="#"+colores[c2];
        li[i].style.color="white"; 
    }
  }
}

function getRandomArbitrary(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
  }


let agregarItem = document.getElementById('agregarItem');
agregarItem.addEventListener('click', ()=>{
    let cantidadDeItems=Items.childElementCount;
    let li= document.createElement('li');
    li.textContent= 'Item '+ (cantidadDeItems+1);
    li.setAttribute('class', 'list-group-item');
    Items.append(li);
})


let escribir=document.getElementById('inputUnico');
let salida=document.getElementById('output');
escribir.addEventListener('focusout', ()=>{
    
	let evilclone = escribir.cloneNode(true);
    evilclone.removeAttribute("id");
    salida.appendChild(evilclone);
});   



