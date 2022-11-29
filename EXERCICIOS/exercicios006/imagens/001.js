function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 1 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homen' 
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','crianca-M.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','jovem-M.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src','homen.png')
            }else {
                //Idoso
                img.setAttribute('src','velho.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <10){
                //criança
                img.setAttribute('src','crianca-F.png')
            }else if (idade <21){
                //jovem
                img.setAttribute('src','jovem-F.png')
            } else if (idade <50) {
                //adulto
                img.setAttribute('src','mulher.png')
            }else {
                //Idoso
                img.setAttribute('src','velha.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}