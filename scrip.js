let nomeAluno = prompt ("Digite o nome do aluno");
const numero = Number(prompt("Digite o número da matrícula do aluno"));

let nota1 = Number(prompt("Digite sua primeira nota"));
let nota2 = Number(prompt("Digite sua segunda nota"));
let media = (nota1+nota2)/2;


zif(media >=7 && media <=10){
    console.log("O aluno está aprovado")
}

else if(media <=6 && media >=3){
    console.log("O aluno está de recuperação")
}

else if(media >0 && media <=3){
    console.log("O aluno está reprovado")
}

console.log("O aluno "+nomeAluno+", matrícula "+numero+", obteve a média final "+media);