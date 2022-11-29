

function capturar() {
    var capturando = document.getElementById('valor').value;
    var total01 = Number(capturando * 0.35)
    var total02 = Number(capturando * 0.50)
    

    document.getElementById('valorDigitado')

    if (capturando >= 200) {
        valorDigitado.innerHTML = `Uma viagen de  ${capturando} KM vai custa R$${total01} Reais`
    }else if (capturando <= 201) {
        valorDigitado.innerHTML = `Uma viagen de  ${capturando} KM vai custa R$${total02} Reais`
    }

    


}
