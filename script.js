// Reference elements
const gridContainer = document.getElementById("grid-element-container");
const drawButton = document.getElementById("draw-button");
const eraseButton = document.getElementById("erase-button");
const colorButton = document.getElementById("color-button");
let isDrawClicked = false;
let isEraseClicked = false;
let isColorClicked = false;

// Generate random color 
function generateRandomColor() {
    const color = Math.floor(Math.random() * 255);
    return color;
}

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
    gridElementsList[i].addEventListener("mouseover", function() {
        if (isDrawClicked) {
        gridElementsList[i].style.backgroundColor = "rgb(0,0,0)";
        }

        if (isEraseClicked) {
                gridElementsList[i].style.backgroundColor = "rgb(255,255,255)";
            }

        if (isColorClicked) {
            const red = generateRandomColor();
            const green = generateRandomColor();
            const blue = generateRandomColor();
            gridElementsList[i].style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        }
    })
}




