var vez = "x"
var jogo = [[0, 0, 0], 
            [0, 0, 0], 
            [0, 0, 0]]

function marca(idClicado) {
    let quadro = document.querySelector(`#${idClicado}`)
    let linha
    let coluna = idClicado.substring(1,2) - 1 

    switch (idClicado.substring(0,1)) {
        case 'a':
            linha = 0                          
            break;
        case 'b':
            linha = 1
            break;
        case 'c':
            linha = 2        
            break;    
        default:
            break;
    }

    if (vez=='x') {
        quadro.src = "imagens/x.png"
        vez = 'bola'
        jogo[linha][coluna] = 1
    } else {
        quadro.src = "imagens/circle.png"
        vez = 'x'
        jogo[linha][coluna] = 4
    }

    var fim = validaResultado()
    if (fim=='x') {
        var imagens = document.querySelectorAll('img')

        imagens.forEach(element => {
            element.remove()
        })
        alert('Jogo acabou e X venceu')

        var acabou = document.createElement('img')
        var msgfinal = document.createElement('h1')
        msgfinal.innerText = 'Que vergonha Bola'
        acabou.src = "imagens/perdeu.jpg"
        document.body.appendChild(msgfinal)
        document.body.appendChild(acabou)
    } else if (fim=='bola') {
        alert('Jogo acabou e Bola venceu')
        var imagens = document.querySelectorAll('img')

        imagens.forEach(element => {
            element.remove()
        })
        var acabou = document.createElement('img')
        var msgfinal = document.createElement('h1')
        msgfinal.innerText = 'Que vergonha X'
        acabou.src = "imagens/perdeu.jpg"
        document.body.appendChild(msgfinal)
        document.body.appendChild(acabou)
    }
}
function soma(totalizador, numero) {
    return totalizador + numero
}
function validaResultado(){
    var retorno
    retorno = validaHorizontalVertical('V')
    if (retorno == 'x' || retorno == 'bola') {
        return retorno
    }
    retorno = validaHorizontalVertical('H')
    if (retorno == 'x' || retorno == 'bola') {
        return retorno
    }
    retorno = validaDiagonal()
    if (retorno == 'x' || retorno == 'bola') {
        return retorno
    }
}
function validaHorizontalVertical(pesquisa) {
    let result = []
    
    for (let linha = 0; linha < 3; linha++) {
        result = []
        for (let col = 0; col < 3; col++) {
            if (pesquisa=='H'){
                valor = jogo[linha][col]
                //console.log(`Linha: ${linha} Coluna: ${col} Valor: ${valor}`)
            } else{
                valor = jogo[col][linha]
                //console.log(`Coluna: ${col} Linha: ${linha} Valor: ${valor}`)
            }
            
            result[col] = valor
            
            
        }
        
        var total = result.reduce(soma)    
        //console.log(result)
        //console.log(total)
        if (total==3) {
            console.log('X ganhou')
            return 'x'
        } else if (total==12) {
            console.log('Bola ganhou')
            return 'bola'
        }
        
    }
}
function validaDiagonal() {
    let result = []
    result[0] = jogo[0][0]
    result[1] = jogo[1][1]
    result[2] = jogo[2][2]

    var total = result.reduce(soma)    

    if (total==3) {
        console.log('X ganhou')
        return 'x'
    } else if (total==12) {
        console.log('Bola ganhou')
        return 'bola'
    }

    result[0] = jogo[2][0]
    result[1] = jogo[1][1]
    result[2] = jogo[0][2]

    var total = result.reduce(soma)    

    if (total==3) {
        console.log('X ganhou')
        return 'x'
    } else if (total==12) {
        console.log('Bola ganhou')
        return 'bola'
    }

}
