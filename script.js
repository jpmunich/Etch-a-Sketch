const gridContainer = document.getElementById("grid-container");


function makeGridPiece() {
    const gridElement = document.createElement("div");
    gridContainer.appendChild(gridElement);
    gridElement.classList.add("grid");
}


function makeGrid(size) {
    for (let i = 0; i < size; i++) {
        makeGridPiece();
    }
}

makeGrid(25);