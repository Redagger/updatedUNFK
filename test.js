const canvas = document.getElementById('textCanvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.src = 'UNFKa.png';

let offsetX = 0;
let offsetY = 0;
const speedX = 1.2;
const speedY = 1.2;

image.onload = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');
    const patternSize = 140; 
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;

    patternContext.drawImage(image, 0, 0, patternSize, patternSize);
    const pattern = ctx.createPattern(patternCanvas, 'repeat');

    
    function drawImagePattern() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = pattern;
        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.fillRect(-offsetX, -offsetY, canvas.width, canvas.height);
        ctx.restore();

        offsetX += speedX;
        offsetY += speedY;

        if (offsetX > patternSize) offsetX = 0;
        if (offsetY > patternSize) offsetY = 0;

        requestAnimationFrame(drawImagePattern);
    }

    drawImagePattern();
};
