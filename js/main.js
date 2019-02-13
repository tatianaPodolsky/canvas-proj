var gCanvas;
var gCtx;
// var gShapes = [
//     {name:'pen', func: drawLine}, {name: 'rect', func: drawRect}, {name: 'circle', func: drawCircle}]

var gPrevPos;
var gColor;
var gShape = 'line'

function init() {
    gCanvas = document.querySelector('#canvas-container');
    gCtx = gCanvas.getContext('2d');
    startup();
}

function onDown(ev) {
    console.log('down, ev: ', ev);
    let x = ev.offsetX;
    let y = ev.offsetY;
    gPrevPos = { x: x, y: y };
}

function onMove(ev) {
    let x = ev.offsetX;
    let y = ev.offsetY;
    console.log('move', ev);
    if (ev.which !== 1) return;
    drawLine(x, y);
    gPrevPos.x = x;
    gPrevPos.y = y;
}


function contact() {
    alert('This feature will be added in future, this project was built by Tatiana and Ido')
}

function drawLine(x, y) {
    // debugger;
    gCtx.beginPath();
    gCtx.strokeStyle = gColor;
    gCtx.moveTo(gPrevPos.x, gPrevPos.y);
    gCtx.lineTo(x, y);
    gCtx.stroke();
}


// COLOR PICKING with add event listener

function startup() {
    let elColor = document.querySelector("#color-pick");
    gColor = elColor.value;
    elColor.addEventListener("input", getColor, false);
        function getColor() {
        gColor = elColor.value;
    }

}



function downloadImg(elLink) {
    var imgContent = canvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}