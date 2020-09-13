/**@type {HTMLCanvasElement}} */
var canvas;
/**@type {CanvasRenderingContext2D} */
var ctx;
var xMonster = 10;
var yMonster = 10;
var speedMonster = 1;
var velocidade = 5;
const modificaVelo = 0.1;

function soma(n1, n2, sinal){

    let ret;
    if (sinal == '+') {
         ret = parseFloat(parseFloat(n1) + parseFloat(n2)).toFixed(2);
    } else {
        ret = parseFloat(n1 - n2).toFixed(2);
    }
    
    return ret;
    
}

document.body.onkeydown = function(e){
    if (e.keyCode == 38) {
        velocidade = soma(velocidade, modificaVelo, '+')
    } else if (e.keyCode == 40) {
                if (velocidade > 0) {
                    velocidade = soma(velocidade, modificaVelo, '-')
                    if (velocidade < 0) {
                        velocidade = 0;
                    }    
                }        
            }

    var v = document.querySelector("#velo");
    v.textContent = velocidade.toString();
}

window.onload = function init(){
    canvas = document.querySelector("#mycanvas");
    w = canvas.width;
    h = canvas.height;
    
    ctx = canvas.getContext('2d');

    mainLoop();
}

function mainLoop()
{
    
    ctx.clearRect(0, 0, w, h);
    
    xMonster += (speedMonster * velocidade);
    ctx.fillStyle = 'red';
    ctx.fillRect(xMonster, yMonster, 10, 10);
    
    ctx.fillStyle = 'magenta'
    ctx.beginPath();
    ctx.arc(xMonster, 100, 25, 0, 6);
    ctx.fill();

    if (xMonster >= w || xMonster <= 0) {
        speedMonster = -speedMonster;
    }

    requestAnimationFrame(mainLoop)
}