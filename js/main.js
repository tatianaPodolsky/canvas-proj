var gCanvas;
var gCtx;
var gShapes = [
    {name:'pen', func: drawPoint}, {name: 'rect', func: drawRect}, {name: 'circle', func: drawCircle}]
function init() {
    gCanvas = document.querySelector('#canvas-container');
    gCtx = gCanvas.getContext('2d');
}

function canvasClicked(ev, shape) {
    console.log('hi, ev: ', ev);
    ev.offsetX

}


function drawPoint(x, y, color) {
    gCtx.beginPath()
    gCtx.arc(100, 300, 50, 0, 2 * Math.PI);
    gCtx.stroke()
    gCtx.fill()
}

function contact () {
    alert('This feature will be added in future, this project was built by Tatiana and Ido')
}