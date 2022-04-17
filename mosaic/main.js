const firstColumn = document.querySelector(".first-column");
const secondColumn = document.querySelector(".second-column");
const thirdColumn = document.querySelector(".third-column");

const randomColors = () => {
    const hexElements = ['A','B','C','D','E','F','1','2','3','4','5','6','7','8','9'];
    var resColor = "#";
    for (let index = 0; index < 6; index++) {
        let randomElement = hexElements[Math.floor(Math.random() * hexElements.length)];
        resColor+= randomElement;
    }
    return resColor;
}

const createBlock = (canvas, quantity) => {
    for (let index = 0; index < quantity; index++) {
        let newBlock = document.createElement("div");
        newBlock.style.backgroundColor = randomColors();
        newBlock.className = "block";
        canvas.appendChild(newBlock);
    }
}


createBlock(firstColumn, 5);
createBlock(secondColumn, 4);
createBlock(thirdColumn, 25);



