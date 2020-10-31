function girar(){
    var botoes = document.getElementsByTagName('button')
    var posicoes = [1, 2, 3, 6, 9, 8, 7, 4 ]

    for (const iterator of botoes) {
        let atual = iterator.textContent
        let posicao = 0
        let nextPos = 0

        if(atual==5){
            continue
        }
        
        posicao = posicoes.findIndex(function(number, index){
                                        return atual==number
                                    })

        nextPos = posicao - 1
        
                                    

        if(nextPos < 0 ){
            nextPos = posicoes.length - 1
        } 

        iterator.textContent = posicoes[nextPos]


        console.log('atual: ' + atual + ' posicao: ' + posicao + ' next: ' + nextPos)

        //console.log('oi')
    }
   
}