const drawBox = document.getElementById("db");
const input = document.querySelector('input');

const squareButton = document.getElementById('sqrButton');
const circleButton = document.getElementById('crlButton');
const triangleButton = document.getElementById('trgButton');

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

squareButton.addEventListener("click", () => {
    let amount = input.value;
    
    let drawBoxWidth = drawBox.offsetWidth;
    let drawBoxHeight = drawBox.offsetHeight;

    for (let i = 0; i < amount; i ++) {
        const newSquare = document.createElement("div");
        newSquare.style.backgroundColor = "red";
        newSquare.style.position = "absolute";
        newSquare.style.border = "1px solid"
        newSquare.style.opacity = "0.9";


        let squareSide = getRandomNum(10,200) + "px";
        newSquare.style.width = squareSide;
        newSquare.style.height = squareSide;
        
        let maxLeft = drawBoxWidth - parseInt(squareSide, 10);
        let maxTop = drawBoxHeight - parseInt(squareSide, 10);
        
        newSquare.style.marginLeft = getRandomNum(0, maxLeft) + "px";
        newSquare.style.marginTop = getRandomNum(0, maxTop) + "px";


        newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = "yellow";
        });

        newSquare.addEventListener("mouseout", () => {
            newSquare.style.backgroundColor = "red";
        });

        newSquare.addEventListener("click", () => {
            drawBox.removeChild(newSquare);
        });

        drawBox.appendChild(newSquare);
    }

});





circleButton.addEventListener("click", () => {
    let amount = input.value;
    
    let drawBoxWidth = drawBox.offsetWidth;
    let drawBoxHeight = drawBox.offsetHeight;

    for (let i = 0; i < amount; i ++) {
        const newCircle = document.createElement("div");
        newCircle.style.backgroundColor = "green";
        newCircle.style.position = "absolute";
        newCircle.style.border = "1px solid";
        newCircle.style.borderRadius = "100%";
        newCircle.style.opacity = "0.9";


        let side = getRandomNum(10,200) + "px";
        newCircle.style.width = side;
        newCircle.style.height = side;
        
        let maxLeft = drawBoxWidth - parseInt(side, 10);
        let maxTop = drawBoxHeight - parseInt(side, 10);
        
        newCircle.style.marginLeft = getRandomNum(0, maxLeft) + "px";
        newCircle.style.marginTop = getRandomNum(0, maxTop) + "px";


        newCircle.addEventListener("mouseover", () => {
            newCircle.style.backgroundColor = "yellow";
        });

        newCircle.addEventListener("mouseout", () => {
            newCircle.style.backgroundColor = "green";
        });

        newCircle.addEventListener("click", () => {
            drawBox.removeChild(newCircle);
        });

        drawBox.appendChild(newCircle);
    }

});





triangleButton.addEventListener("click", () => {
    let amount = input.value;
    
    let drawBoxWidth = drawBox.offsetWidth;
    let drawBoxHeight = drawBox.offsetHeight;

    for (let i = 0; i < amount; i ++) {
        const newTriangle = document.createElement("div");
        newTriangle.style.backgroundColor = "blue";
        newTriangle.style.position = "absolute";
        newTriangle.style.border = "1px solid";
        newTriangle.style.clipPath = "polygon(50% 50%, 100% 100%, 0% 100%)";
        newTriangle.style.opacity = "0.9";


        let side = getRandomNum(10,200) + "px";
        newTriangle.style.width = side;
        newTriangle.style.height = side;
        
        let maxLeft = drawBoxWidth - parseInt(side, 10);
        let maxTop = drawBoxHeight - parseInt(side, 10);
        
        newTriangle.style.marginLeft = getRandomNum(0, maxLeft) + "px";
        newTriangle.style.marginTop = getRandomNum(0, maxTop) + "px";


        newTriangle.addEventListener("mouseover", () => {
            newTriangle.style.backgroundColor = "yellow";
        });

        newTriangle.addEventListener("mouseout", () => {
            newTriangle.style.backgroundColor = "blue";
        });

        newTriangle.addEventListener("click", () => {
            drawBox.removeChild(newTriangle);
        });

        drawBox.appendChild(newTriangle);
    }

});

