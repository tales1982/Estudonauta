function calc() {
    let peso = document.getElementById('kg').value
    let mercurio = document.getElementById("01")
    let venus = document.getElementById("02")
    let terra = document.getElementById("03")
    let marte = document.getElementById("04")
    let jupiter = document.getElementById("05")
    let saturno = document.getElementById("06")
    let urano = document.getElementById("07")
    let nepturno = document.getElementById("08")

    mercurio.innerHTML += `Seu pesso em Mercurio e de <strong>${peso * 0.37}</strong> Kg.`
    venus.innerHTML += `Se pesso em Venus e de <strong>${peso * 0.88}</strong> Kg.`
    terra.innerHTML += `Se pesso na Terra e de <strong>${peso * 1}</strong> Kg.`
    marte.innerHTML += `Se pesso em Marte e de <strong>${peso * 0.38}</strong> Kg.`
    jupiter.innerHTML += `Se pesso em Jupiter e de <strong>${peso * 2.64}</strong> Kg.`
    saturno.innerHTML += `Se pesso em Saturno e de <strong>${peso * 1.15}</strong> Kg.`
    urano.innerHTML += `Se pesso em Urano e de <strong>${peso * 1.17}</strong> Kg.`
    nepturno.innerHTML += `Se pesso em Nepturno e de <strong>${peso * 1.18}</strong> Kg.`
}

