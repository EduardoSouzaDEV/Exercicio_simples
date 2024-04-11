function verificar(){
    let fano = document.getElementById('txtano')
    let data = new Date()
    let ano = data.getFullYear()
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]Algo está errado')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img',)
        img.setAttribute('id', 'foto',)
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', './img/criança-menino.jpg')
            }else if (idade < 21){
                //joven
                img.setAttribute('src', './img/joven-homen.jpg')
            }else if (idade < 50 ){
                //adulto
                img.setAttribute('src', './img/adulto-homen.jpg')
            }else {
                //idoso
            img.setAttribute('src', './img/veio-homen.jpg')
            }
        }else if (fsex[1].checked){
            genero = ' Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criança menina.jpg')
            }else if (idade < 21){
                //joven
                img.setAttribute('src', 'joven menina.jpg')
            }else if (idade < 50 ){
                //adulto
                img.setAttribute('src', 'adulto mulher.jpg')
            }else {
                //idoso
            img.setAttribute('src', 'veio mulher.jpg')
            }
        }
        res.innerHTML = `Gênero ${genero} com idade de ${idade} anos </br>`
        res.appendChild(img)
    }
}