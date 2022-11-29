function iniciar() {

    let nome = prompt('Ola, como voçe se chama?')
    let nota = Number(prompt('Qual sua primeira nota?'))
    let nota2 = Number(prompt('Qual é sua segunda nota?'))
    let resultado = ((nota + nota2) / 2)
    res.innerHTML = `Ola ${nome} sua nota é  ${resultado}.`
    if (resultado >= 6) 
        res.innerHTML = `Parabens sua nota é ${resultado} e voçe passou com Suceso`
    else if (resultado <= 5) 
       res.innerHTML = `Desculpe sua nota e de ${resultado} voce nao passou continue estudando`
    

}