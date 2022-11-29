
function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagen')
    let date = new Date ()
   // let hora = date.getHours()
    let hora= 19
    msg.innerHTML = `Agora são ${hora}.`

    if (hora >= 0 && hora <12){
        msg.innerHTML=`BOM DIA`
        img.src = "imagens/foto-amanhecer-250x250.png"
        document.body.style.background = `#F2C53D`
        document.ms
        

    }else if (hora >12 && hora <18){
        msg.innerHTML= `BOA TARDE`
        img.src = "imagens/tarde.png"

    }else {
        msg.innerHTML= `BOA NOITE`
        img.src="imagens/noite.png"
        document.body.style.background = `#112A40`
        
    }
}