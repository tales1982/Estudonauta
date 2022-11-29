function exercito() {
    let nome = prompt('Ola Qual é seu nome?');
    let idade = Number(prompt('Qual o ano que voçe naçeu?'));
    let msg = document.querySelector('section#msg');
    let anoAtual = Number(new Date().getFullYear());
    let res = anoAtual - idade
   // msg.innerHTML += `Ola ${nome}.<br>Sua idade é de ${res}`
    msg.innerHTML += `Ola <strong>${nome}</strong>.<br>Sua idade é de ${res} anos<br>`

    if (res == 18) {
        msg.innerHTML += 'Este ano voçe tem que se alistar.'
    } else if (res <= 17) {
        msg.innerHTML += 'Voçe ainda e muito jovem pra se alistar'
    }else if (res >= 19 ){
        msg.innerHTML +=`Obrigado pelo seus servisos prestado a sua patria. `
    }
}

    
