

// FUNCOES



let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);






// muda o conteudo qdo o mouse passa por cima
function trocar(elemento){
 //   document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse"; // funciona com o trocar(this)
    elemento.innerHTML = " Obrigado";  // funciona com o trocar(this)
}
// muda o conteudo qdo o mouse sai de  cima
function voltar(elemento){
   // document.getElementById("mouse").innerHTML = "Passe o Mouse aca";  // funciona com  voltar() sem argumento
   elemento.innerHTML = " Passe o mouse aca";   // funciona com o voltar(this)
}

// ativada qdo clica em objteo, texto
function clicou(){
    document.getElementById("thanks").innerHTML = "<b> Valeu ´por clicar mano!</b>";

}

// abre det. pagina qdo clicado 
function redirecionar(){
    window.open("https://globallabs.academy/");  // abre o endereço em outra aba
//    window.location.href = "https://globallabs.academy/";  // abre na mesma aba
}


//
function load(){
    alert("pagina carregada");
}

function change(elemento){
    console.log(elemento.value);
}
/*


// funçao com if
var validar = 0;
function valida(idade){
    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
    }
var idade = prompt("qual sua idade?");
valida(idade)
console.log(validar);




// soma 
function soma(n1 , n2){
    return n1 + n2;

}
alert(soma(5,10));

// funcao setReplace
function setReplace(frase, nome ,nomenovo){
    return frase.replace(nome, nomenovo)
}
alert(setReplace("Vai Japao","Japao", "Mexico"));



// trabalhando datas
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth()+1);
alert(d);



//loop for
var count;
for(count=0; count <= 5; count++){
    alert(count);
};


// loop while
var count = 0;
while (count <= 5){
    alert(count);
    count++;
};


// loop if else
var idade = prompt("qual sua idade?");
if ( idade >= 18) {
    alert("maior que 18");
}else{ alert("menor de idade");
};






//listas usa []
var lista = ["maca" , "pera" , "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.toString());
alert(lista.join(" / "));



// dicionario  usa  {}
var fruta = {nome:"maca" , cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);



// listas de dicionario  [{} , {}]
var frutas = [{nome:"maca" , cor:"vermelha"} , {nome:"laranja" , cor:"laranja"}];
console.log(frutas);
alert(frutas[1].cor);


//  variaveis , alert e console.log
var nome = "Alex champs";
alert("Another javascript test" + nome)
var idade = 29;
var idade2 = 14;
var frase = "no ninho da mafaga tinha 5 coelhinhos";
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("mafaga" , "Koala"));



*/