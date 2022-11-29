const alunos = ['joão','Maria','Amanda','Carlos']

console.log(alunos)
//Agora irei resgatar um aluno pelo seu valor

console.log(alunos[2])
// resultado aparecerar 'Amanda'
// Agora irei adcionar mais um aluno 
alunos.push('Fernando')
console.log(alunos)
// resultado aparecera agora [ 'joão', 'Maria', 'Amanda', 'Carlos', 'Fernando' ]
//para adciona o aluno usso o .push('AQUI')e adciono o aluno dentro da chave com aspas.

//Removendo último aluno
//Através do método pop(), podemos fazer a remoção do último aluno de nosso array e, ainda por cima, guardar o valor em uma outra variável, já que, esse método além de remover o último aluno irá retorná-lo.

const ultimoaluno = alunos.pop();
console.log(alunos)

// o aluno fernando foi removido do meu array.
console.log(ultimoaluno)

//aqui ele me mostra o ultimo aluno removido.

// para saber o comprimento ou quantas possicoes tem no meu array posso usar o atributo .length
//exemplo
console.log(`O meu vetor tem ${alunos.length} possiçoes`)

//Posso buscar um determinado vetor por possicao posso usar o exemplo abaixo
console.log(`O meu segundo vetor é ${alunos[1]}`)
// Se eu tiver um vetor que seja numerico posso colocar em orden usando o .sort()
//exemplo
alunos.sort()
let pos = alunos.indexOf(2)
console.log(pos)
alunos.indexOf('Amanda')