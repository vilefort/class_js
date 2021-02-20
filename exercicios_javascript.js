// Desafio INtrodução ao  Javascript
// DESAFIO 1

let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);


//DESAFIO II
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);


//DESAFIO III
let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());
let salary = parseFloat(valor2 * valor3).toFixed(2); // valor2 vezes valor 3
console.log("NUMBER = " + valor1);
console.log("SALARY = U$ " + salary);






// DESAFIO FUNDAMENTO ARITMETICA JAVASCRIPT
//Desafio 1
let positivo = 0;

for (var i=0; i<6; i++){
  numero = gets();
  if (numero > 0){ positivo++; }
}
console.log(positivo + " valores positivos");

// Desafio 2
let numero = gets();

for (var i=2; i<=numero; i=i+2){
console.log(i);  
}




//  Desafio 3
var pares = 0;
var impares = 0;
var positivos = 0;
var negativos = 0;

for (var i=0; i<5; i++){
  numero = parseInt(gets()); //gets() funciona de stdin pegando o numero fornecido, parseInt pega só aparte inteira
  
  
  if (numero > 0){ positivos++; 
  } else if (numero < 0) { negativos++;
  }

  if ((numero %2)== 0) { pares++;
  } else {impares ++;
  }
}


console.log(pares + " valor(es) par(es)");
console.log(impares + " valor(es) impar(es)");
console.log(positivos + " valor(es) positivo(s)");
console.log(negativos + " valor(es) negativo(s)");


//DESAFIO 4
/* Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode 
ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a 
relação de notas necessárias. 
*/

let valor = parseInt(gets());
var notas = [100, 50, 20, 10, 5, 2, 1];
var cont = [0, 0, 0, 0, 0, 0, 0];
var resto = 0;

console.log(valor);
for (let index = 0; index < notas.length; ++index) {
    let value = notas[index];
    
    if(valor >= value){ // true
    cont[index] = Math.floor(valor/value); // 
    valor = valor % value; // resto vai receber 72
    }
    
    console.log(cont[index] +" nota(s) de R$ " + value +",00" );
}



//  DESAFIO 5 
/*
Você deve calcular o consumo médio de um automóvel onde será informada a distância total percorrida (em Km) 
e o total de combustível consumido (em litros).
*/

var dist = parseInt(gets())
var cons = gets()
var consMed = dist / cons
console.log(consMed.toFixed(3) + " km/l")




