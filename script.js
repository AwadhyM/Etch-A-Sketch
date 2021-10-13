const container = document.getElementById('container');

function createGrid (rows) {
    for (i = 1; i <= rows; i++) {
        const gridrows = document.createElement('div');
        gridrows.classList.add("divrows");
        container.appendChild(gridrows);
        for (j = 1; j <= rows; j++) {
        const cols = document.createElement('div');
        cols.classList.add("divcols");
        //cols.setAttribute("ID", `${i} x ${j}`);
        gridrows.appendChild(cols);
    }
    }
}

createGrid(16);

let rows = document.getElementsByClassName("divrows");
let cols = document.getElementsByClassName("divcols");

function removeExistingGrid () {
    while(rows.length > 0){
            rows[0].parentNode.removeChild(rows[0]);
        }
    while (cols.length > 0) {
        cols[0].parentNode.removeChild(cols[0]);
    }
    }


function customGrid () {
    let userChoice = prompt("Select a number between 1-100 in order to make a grid", "");
    if (userChoice > 0 && userChoice <=100) {
        removeExistingGrid();
        createGrid(userChoice);
    }
}

let customButton = document.getElementById('customMode');

customButton.addEventListener("click", customGrid);

container.addEventListener("mouseover", function(e) {
    if (e.target.classList == "divcols")  {
        e.target.style.backgroundColor = "aqua";
    }
});

