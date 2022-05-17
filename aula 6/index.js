function soma(num1,num2){
    return num1+num2
}
function subtracao(num1,num2){
    return num1-num2
}
function multiplicacao(num1,num2){
    return num1+num2
}
function divisao(num1,num2){
    return num1+num2
}
function quadradonumero(num1){
    return num1 ** 2;
}
function mediadetres(num1,num2,num3){
    return (num1+num2+num3) / 3;
}
function porcentagem (num1,num2){
    return num1 * num2 / 100
}
function porcentagem2(num1,num2){
    return num1/num2 *100
}
function raiz(num1,){
return num1 ** (1/2);
}
console.log(
    `teste calculadora
    resultado soma: ${soma(10, 5)}
    resultado subtração: ${subtracao(4,2)}
    resultado multiplicação: ${multiplicacao(3,7)}
    resutlado divisão: ${divisao(8,2)}
    resultado quadrado: ${quadradonumero(6)}
    resultado média de três: ${mediadetres(3,6,9).toFixed(2)}
    resultado porcentagem: ${porcentagem(300,50)}
    resultado porcentagem: ${porcentagem2(300,50)}%
    resultado raíz quadrada: ${raiz(16,)}

    `)

