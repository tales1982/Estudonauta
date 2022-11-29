function btn() {
    let gasolina = Number (document.getElementById('valor').value);
    let total = Number (gasolina * 6.35)
    let desconto = (gasolina * 6.35) * 0.90
    let res = document.getElementById('res')
    res.innerHTML = `O preço que voce tem que pagar e de R$ ${total} reais<br>`
    if (gasolina >= 50 ){
        res.innerHTML +=`Voçe abasteçeus com ${gasolina} litros e teve um desconto de 10% <br>`
        res.innerHTML +=`O preço Final com o desconto e de R$ ${desconto} Reais`
    }
}