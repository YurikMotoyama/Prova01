pessoa = {
    nome: "teste",
    nascimento: 2003,
    cpf: 1231231231
}
    
aluno = {
    nome: "teste",
    nascimento: 2003,
    cpf: 1231231231,
    matricula: 11111,
    conjutoNotas: [10,20,30,40] 
}

function media(conjutoNotas) {
    contagemNotas = 0;
    for(i=0; i < conjutoNotas.length ;i++){
        contagemNotas += conjutoNotas[i]
    }
    console.log(contagemNotas/conjutoNotas.length)
}

media(aluno.conjutoNotas)

