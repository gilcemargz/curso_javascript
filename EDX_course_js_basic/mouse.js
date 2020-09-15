/**@type {HTMLCanvasElement} */
var canvas;
/**@type {CanvasRenderingContext2D} */
var ctx;
var mousePos, mouseButton;

window.onload = function init(){
    canvas = document.querySelector('#mycanvas');
    ctx = canvas.getContext('2d');
    canvas.addEventListener('mousemove', escrever);
}

function escrever(/**@type {MouseEvent} */ evt){
    var xx = evt.clientX;
    var yy = evt.clientY;
    var msg = 'Mouse at position: ' + xx + ',' + yy;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '18pt Comic Neue';
    ctx.font.italics();
    ctx.fillText(msg, 10, 25);
    
    console.log(msg);  
}