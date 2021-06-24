window.onload = ()=> {
    let valor1=40;
    let valor2=16;
    const sumatotal= sumar(valor1,valor2);
    function sumar(valor1,valor2){
        return valor1+valor2;
    } 

    document.getElementById("resultado").innerText=sumatotal;

}