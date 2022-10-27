


function add (num1, num2){
    let soma = num1 + num2;
    return soma;
}
console.log(add (2,3)); 

function multiply(num3, num4){
    let resultado = 0;
    for (let i=0; i<num4; i++){
        resultado = add(num3, resultado);
         
    }
    return resultado;
}
console.log (multiply(2,8));


function power(num5, num6){

    let potencia = 1;
    for (let i=0; i<num6; i++){
        potencia = multiply(num5, potencia);
    }
    return potencia;
}
console.log(power(2,8));



function factorial(num7){

    let fator = 1;
        for (let i=num7; i>0; i--){
        fator = multiply(fator,i);
        }
    return fator;
}

console.log(factorial(4));