function countClicks(){
    var botao
    var countNow

    botao = document.querySelector("#btn")
    countNow = Number(botao.textContent)

    botao.textContent = countNow + 1
}