const container = document.getElementById('container');


function createGrid (rows) {
    for (let i = 0; i < rows; i++) {
        const gridrows = document.createElement('div');
        gridrows.classList.add("divrows");
        container.appendChild(gridrows);
        for (let j = 0; j < rows; j++) {
        const cols = document.createElement('div');
        cols.classList.add("divcols");
        gridrows.appendChild(cols);
    }
    }
}

createGrid(16);










