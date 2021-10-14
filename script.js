const container = document.getElementById('container');

function createGrid (rows) {
    for (i = 1; i <= rows; i++) {
        const gridrows = document.createElement('div');
        gridrows.classList.add("divrows");
        container.appendChild(gridrows);
        for (j = 1; j <= rows; j++) {
        const cols = document.createElement('div');
        cols.classList.add("divcols");
        cols.setAttribute("ID", `${i} x ${j}`);
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

let aquaButton = document.getElementById('aquabutton');
let orangeButton = document.getElementById('orangebutton');
let greenButton = document.getElementById('greenbutton');
let greyButton = document.getElementById('greybutton');
let rainbowButton = document.getElementById('rainbowbutton');

aquaButton.addEventListener("click", aquaColour);
orangeButton.addEventListener("click", orangeColour);
greenButton.addEventListener("click", greenColour);
greyButton.addEventListener("click", greyColour);
rainbowButton.addEventListener("click", rainbowColour);
eraserButton.addEventListener("click",)

// functions for event listeners 

function erasor () {
    
}

function aquaColour () {
container.addEventListener("mouseover", function(e) {
    if (e.target.classList == "divcols")  {
        e.target.style.backgroundColor = "aqua";
    }
});
}

function orangeColour () {
    container.addEventListener("mouseover", function(e) {
        if (e.target.classList == "divcols")  {
            e.target.style.backgroundColor = "orange";
        }
    });
}

function greenColour () {
    container.addEventListener("mouseover", function(e) {
        if (e.target.classList == "divcols")  {
                e.target.style.backgroundColor = "green";
        }
    });
}

function greyColour () {
    container.addEventListener("mouseover", function(e) {
        if (e.target.classList == "divcols")  {
                e.target.style.backgroundColor = "gray";
        }
    });
}


function rainbowColour () {
    container.addEventListener("mouseover", function (e) {
    if (e.target.classList == "divcols")  {
    let colours = ["red", "blue", "orange", "green", "yellow", "grey", "pink", "purple"];
    let randomColour = colours[Math.floor(Math.random() * colours.length)];
    e.target.style.backgroundColor = `${randomColour}`;
    }
});
}



