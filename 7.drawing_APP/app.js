const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
const resetButton=document.querySelector("#reset");
const color=document.querySelector("#colors")
const colorLength=document.querySelector("#length");
let lengthCounter=document.querySelector("#lengthCounter");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isPainting = false;
let lineWidth=2;
let startX;
let startY;

resetButton.addEventListener('click', e => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
});
colorLength.addEventListener('change', length);

function length(e){
    lineWidth=colorLength.value;
    lengthCounter.innerText=lineWidth;
    return ctx.lineWidth;
}
// lengthCounter=lineWidth;
// console.log(lengthCounter.value);

color.addEventListener('change', e => {
    ctx.strokeStyle = color.value;
});

const draw = (e) => {
    if(!isPainting) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
   

    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    startX = e.clientX;
    startY = e.clientY;
});

canvas.addEventListener('mouseup', e => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
