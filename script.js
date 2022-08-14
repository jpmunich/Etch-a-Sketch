const gridContainer = document.getElementById("grid-element-container");
const drawButton = document.getElementById("draw-button");
const eraseButton = document.getElementById("erase-button");
let isDrawClicked = false;
let isEraseClicked = false;

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

makeGrid(25);

drawButton.addEventListener("click", function() {
    isDrawClicked = true;
    isEraseClicked = false;
})

eraseButton.addEventListener("click", function() {
    isEraseClicked = true;
    isDrawClicked = false;
})

for (let i = 0; i < gridElementsList.length; i++) {
    gridElementsList[i].addEventListener("click", function() {
        if (isDrawClicked) {
        gridElementsList[i].classList.add("clicked-grid-element");
        }
    })

    gridElementsList[i].addEventListener("click", function() {
        if (isEraseClicked) {
        gridElementsList[i].classList.remove("clicked-grid-element");
        }
    })
}




