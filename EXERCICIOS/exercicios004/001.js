
function ano() {


    let nome = prompt('Ola qual e seu nome?');
    let idade = Number(prompt('Qual é sua idade'));
    let anoAtual = Number(new Date().getFullYear());
    let msg = document.querySelector('section#msg');
    let res = anoAtual - idade
    msg.innerHTML += `Ola <Strong>${nome}</Strong> voçe naceu no ano de <Strong>${res}</Strong><br>`
    msg.innerHTML += `E voçe tem <Strong>${idade}</Strong> anos<br>`

    if (idade>40){
        msg.innerHTML +=`Ja esta na hora de voçe começar a fazer um check up `
    }
} 

