const gridContainer = document.getElementById("grid-element-container");
const drawButton = document.getElementById("draw-button");
const eraseButton = document.getElementById("erase-button");
const colorButton = document.getElementById("color-button");
let isDrawClicked = false;
let isEraseClicked = false;
let isColorClicked = false;

// Generate Random Color 
function generateRandomRed() {
    const red = Math.floor(Math.random() * 255);
    return red;
}
function generateRandomGreen() {
    const green = Math.floor(Math.random() * 255);
    return green;
}

function generateRandomBlue() {
    const blue = Math.floor(Math.random() * 255);
    return blue;
}

console.log(generateRandomBlue());

function makeGridPiece() {
    const gridElement = document.createElement("div");
    gridContainer.appendChild(gridElement);

    // Adds to the container div
    gridElement.classList.add("grid-element");
    gridElementsList = document.querySelectorAll(".grid-element");
}

// Parameter "size" determines how many grid pieces will be made
function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        makeGridPiece();
    }
}

makeGrid(100);

drawButton.addEventListener("click", function() {
    isDrawClicked = true;
    drawButton.classList.add("selected-button");
    eraseButton.classList.remove("selected-button");
    colorButton.classList.remove("selected-button");
    isEraseClicked = false;
    isColorClicked = false;
})

eraseButton.addEventListener("click", function() {
    isEraseClicked = true;
    eraseButton.classList.add("selected-button");
    drawButton.classList.remove("selected-button");
    colorButton.classList.remove("selected-button");
    isDrawClicked = false;
    isColorClicked = false;
})

colorButton.addEventListener("click", function() {
    isColorClicked = true;
    colorButton.classList.add("selected-button");
    eraseButton.classList.remove("selected-button");
    drawButton.classList.remove("selected-button");
    isDrawClicked = false;
    isEraseClicked = false;
})

for (let i = 0; i < gridElementsList.length; i++) {
    gridElementsList[i].addEventListener("click", function() {
        if (isDrawClicked) {
        gridElementsList[i].classList.add("clicked-grid-element");
        }

        if (isEraseClicked) {
            gridElementsList[i].classList.remove("clicked-grid-element");
            }

        if (isColorClicked) {
            const red = generateRandomRed();
            const green = generateRandomGreen();
            const blue = generateRandomBlue();
            gridElementsList[i].style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        }
    })
}




