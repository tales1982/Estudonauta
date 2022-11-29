let valores2 = [10,13,11,14,12,15]
valores2.sort()
let valores = [2,4,1,3,6,8,5,7,9,]
valores.sort()//Organiza meus valores em orden numerica0
//console.log(valores)
//valores.push(10)//Adcionar o valor (10)
//console.log(valores)
//valores.pop()//remove o ultimo valor adcionador
//console.log(valores[5])// mostra o valor que esta na sexta possicao
//----------USANDO O FOR NO ARRAY----------//

/*for (let a =0; a < valores.length; a++ ){
    console.log(`A possicão ${a} tem o valor ${valores[a]}`)
}*/
//nesse vetor estou dizendo que a vareavel (A vai receber 0 ) e que se 0 for maior que o (valor comprimento) nesse
//casso o comprimento da minha vareavel (valores) vai receber 0 +1 (a++)
// nesse casso seria (0-->2)zero tem o valor 2 (1-->4) um tem o valor 4

// posso simplifica mais ainda meu array Lembrando que essa sintaxe do FOR  so fuciona para array ou object
// como ler esse sintaxe//
//para cada possicao dentro de valores eu vou mostra o valores A
/*
for (let pros in valores){
    console.log(`A possicao ${pros} tem o valor ${valores[pros]}`)
}
let pos = valores.indexOf(2)
console.log(pos)

let pos = valores.indexOf(2)
console.log(pos)
if (pos == -1){
    console.log(`Ovalor ${pos} nao foi encontrado`)
}else {
    console.log(`O valor  esta na possicao ${pos}.`)
}
let removerValor = valores.splice(pos,1) 
*/
console.log(valores,valores2)

let todosvalores = valores.concat(valores2)//o método .concat() junta as 2 vareaveis em uma nova vareavel. 
console.log(todosvalores)
let valoresCortados = todosvalores.splice(1,9)
console.log(valoresCortados)//os valores 0 e os valores que vem depois de 9 foram cortados