let items =[];

window.onload=()=>{
let name=prompt("Ingrese nombre del alumno");
let nota1=parseFloat(prompt("ingrese nota 1"));
let nota2=parseFloat(prompt("ingrese nota 2"));
let nota3=parseFloat(prompt("ingrese nota 3"));
let promedio = parseFloat((nota1+nota2+nota3)/3);
promedio= Number(promedio.toFixed(2));
items.push(nota1,nota2,nota3);
let cn=0;


let p = document.createElement('h1');
p.innerText="Alumno::"+name;
document.body.appendChild(p);

let ul= document.createElement("ul");

items.forEach(element => {
    cn++;
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('Nota-'+cn+': '+element));
    ul.appendChild(li);


});

document.body.appendChild(ul);
let resultado=document.createElement('p');
resultado.innerText="El promedio es de::"+ promedio;
document.body.appendChild(resultado);
}


