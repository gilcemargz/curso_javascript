function calcula() {
    var inicio = document.querySelector("input#inicio")
    var fim = document.querySelector("input#fim")
    var passo = document.querySelector("input#passo")

    if (!validaDados(inicio)){
        return
    }
    if (!validaDados(fim)){
        return
    }
    if (!validaDados(passo))
    {
        return
    }

    var old = document.getElementById('presult')
    if (old!=null) {
        old.remove()    
    }

    var resultado = document.createElement("p")
    resultado.setAttribute('id', 'presult')

    var conta = parseInt(inicio.value)
    
    while (conta <= fim.value) {
        resultado.textContent += `${conta} - `
        conta += parseInt(passo.value)
        
    }
    console.log('fim')

    document.body.appendChild(resultado)

    var lista = document.querySelector("select#tabuada")
    lista.innerHTML = ''
    

    for (let index = 0; index <= 10; index++) {
        var opcoes = document.createElement("option")
        let multi = index * passo.value
        opcoes.textContent = `${passo.value} x ${index} = ${multi}`
        lista.add(opcoes, lista[index]) 
        console.log(index)
    }

}
function validaDados(param){
    var numero = param

    if (Number.isNaN(numero.value)) {
        return false
    } else if (numero.value == '') {
        return false
    }
    return true
}