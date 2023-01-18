function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var saudacao = document.getElementById('saudacao')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são <strong>${hora}h:${min}min</strong>`
    if (hora >= 0 && hora < 12) {
        img.src = './img/manha.jpg'
        saudacao.innerHTML = `<strong>Bom Dia!</strong>`
        document.body.style.background = '#7c59c7'
    } else if (hora >= 12 && hora < 18) {
        img.src = './img/tarde.jpg'
        saudacao.innerHTML = `<strong>Boa Tarde!</strong>`
        document.body.style.background = '#5623c6'
    } else {
        img.src = './img/noite.jpg'
        saudacao.innerHTML = `<strong>Boa Noite!</strong>`
        document.body.style.background = '#021250'
    }
}