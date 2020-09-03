function f(){
    var resultado = 0
    var quant = arguments.length
    console.log(arguments)

    for (let index = 0; index < quant; index++) {
        resultado += arguments[index]
    }

    console.log(resultado)
}

f(1,2,3,33,99)