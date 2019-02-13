var gCanvas;
var gCtx;
// var gShapes = [
//     {name:'pen', func: drawLine}, {name: 'rect', func: drawRect}, {name: 'circle', func: drawCircle}]

var gPrevPos;
var gColor = 'red';
var gShape = 'arc'

function init() {
    gCanvas = document.querySelector('#canvas-container');
    gCtx = gCanvas.getContext('2d');
}

function onDown(ev) {
    console.log('down, ev: ', ev);
    let x = ev.offsetX;
    let y = ev.offsetY;
    gPrevPos = {x: x, y: y};
}

function onMove(ev) {
    let x = ev.offsetX;
    let y = ev.offsetY;
    if(ev.which !== 1) return;
    drawShape(x, y) ;
    gPrevPos.x = x;
    gPrevPos.y = y;
}

function drawLine(x, y) {
    gCtx.beginPath();
    gCtx.strokeStyle = gColor;
    gCtx.moveTo(gPrevPos.x, gPrevPos.y);
    gCtx.lineTo(x, y);
    gCtx.stroke();
}

function drawArc(x, y) {
    gCtx.arc(x, y, 50, 0, 2*Math.PI);
    gCtx.fillStyle = gColor;
    gCtx.fill();
    gCtx.stroke();
}

function drawRect(x, y) {
    gCtx.fillStyle = gColor;
    gCtx.fillRect(x, y, 10, 10);
    gCtx.stroke();

}

function drawShape(x, y) {
    if (gShape === 'line') {
        return drawLine(x, y);
    } 
    else if (gShape === 'arc') {
        return drawArc(x, y)
    } else return drawRect(x, y);
}

function setShape(shape) {
    gShape = shape;
}