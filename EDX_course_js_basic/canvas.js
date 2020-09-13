var canvas; 
/**@type {CanvasRenderingContext2D} */
var ctx;

window.onload = function init(){
    
    canvas = document.querySelector("#mycanvas");
    ctx = canvas.getContext("2d");

    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 30, 60);
    
    ctx.strokeStyle = 'green';
    ctx.lineWidth = 4;
    ctx.strokeRect(30, 30, 20, 20);
    
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 10, 10 );

    ctx.fillStyle = 'magenta'
    ctx.beginPath();
    ctx.arc(80, 100, 25, 0, 6);
    ctx.fill();
}