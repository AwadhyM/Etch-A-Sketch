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


container.addEventListener("mouseover", function(e) {
    if (e.target && e.target.nodeName == "DIV" && e.target.classList == "divcols")  {
        e.target.style.backgroundColor = "aqua";
    }
});

