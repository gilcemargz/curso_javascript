console.log("Está funcionando")

var velocidade = 80.5

if (velocidade>80) {
    console.log("Multado")
} else {
    console.log("Dentro da velocidade")
}

console.log(`A veolicdade é: ${velocidade}` )

var dia = new Date()

dia = dia.getDay()

switch (dia) {
    case 3:
        console.log("Domingo")        
        break
    case 1:
        console.log("Segunda")
        break

    default:
        console.log("Dia inválido")
        break;
}