
var validar = 0;
function validarIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }  
    return validar;
}

var idade = prompt("Qual sua idade?:")
console.log(validarIdade(idade));
console.log(validar);


/*
function soma (n1, n2){
    return n1+n2;
}
alert(soma(parseInt(prompt("Insira o primeiro número")), 
           parseInt(prompt("Insira o segundo número")))
    );
*/

/*
var d = new Date();
alert(d.getHours());
alert(d.getMinutes());
alert(d.getSeconds());
alert(d.getDay());
alert(d.getMonth() + 1);
alert(d.getFullYear());
*/

/*
var count;
for (count=1; count <=5; count++ ) {
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
} else {
    alert("Menor de idade");
};
*/

/*
//Lista de Dicionário
var frutas = [{nome: "maçã", cor: "vermelha"},
              {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert (frutas[0].cor);
*/

/*
//Dicionário
var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome);
alert (fruta.cor);
*/

/*
var lista = ["maçã", "pera", "laranja"];
console.log(lista);
//lista.pop();
//lista.push("uva");
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());

console.log(lista[0]);
console.log(lista.toString()[0]); 
console.log(lista.toString());
console.log(lista.join(" *-* "));
console.log(lista.join(""));
*/

/*
var nome = "Patricia Fernandes";
var idade = "35";
var idade2 = "10";
var frase = "São Paulo é o melhor time do mundo!";
var n1 = 5;
var n2 = 3;
//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(n1 * n2);

console.log(frase);
console.log(frase.replace("São Paulo", "Brasil"));
alert (frase.replace("São Paulo", "Brasil"));

console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/