function compras(){
    
    let valor = Number(prompt('Qual foi o valor total das compras?'))
    msg = document.querySelector('section#msg')
    msg.innerHTML = `Ola bem vindo ao nosso site<br>`
    msg.innerHTML += `Voce comprou R$${valor} REAIS em compras no nosso site <strong>OBRIGADO</strong>.<br>`
    msg.innerHTML +='=============================================================<br>'

    let desconto = Number(valor*20/100)
    
    
    if (valor >= 350 ) {
        msg.innerHTML +=`Por compra mais de 350 Reais voçe teve uma redução de  R$${desconto} Reais<br>`
        msg.innerHTML +=`O valor a ser pago vais ser de R$${valor-desconto}Reais<br><strong>OBRIGADO E VOLTE SEMPRE</strong>`
    }else if (valor <349) {
        msg.innerHTML +=`Obrigado por compra no nosso site.<br>`
    }
}