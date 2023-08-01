function quadrado(){

    let x=Number(prompt("informe o valor do lado"));
    let y=Number(prompt("informe o valor do lado"));
    let resultado=x*y
    alert("o resultado da area é "+resultado+"m²");
}

function triangulo(){
    let b=Number(prompt("Informe o valor da base de seu triangulo"));
    let a=Number(prompt("Informe o valor da altura de seu triangulo"));
    let resultado=b*a/2
    alert("o resultado da area é "+resultado  )
}
function circulo(){
    let r=Number(prompt("informe o valor do raio do circulo"));
    let pi=Math.PI
    let resultado=r**2*pi
    alert("o resultado da area é "+resultado)
}

function losangulo(){
    let a=Number(prompt("Informe o valor da altura do losangulo"));
    let l=Number(prompt("Informe a largura do seu losangulo"));
    let resultado=a*l/2;
    alert("o resultado da area do losangulo é "+resultado);
}
function trapezio(){
    let b=Number(prompt("Informe o valo da base menor do trapezio"));
    let B=Number(prompt("Informe o valor da base maior "));
    let h=Number(prompt("por ultimo informe a altura do trapezio"));
    let resultado=b*B/h;
    alert("o resultado da area do losangulo é"+resultado)
}