const container = document.getElementById("container");
const buttonContainer = document.getElementById("buttons")

let isMouseDown = false;
let isRightMouseDown = false;

document.addEventListener('mousedown', (e) => {
    if (e.button === 0) {
        isMouseDown = true;
    } else if (e.button === 2) {
        isRightMouseDown = true;
    }
})

document.addEventListener('mouseup', (e) => {
    if (e.button === 0) {
        isMouseDown = false;
    } else if (e.button === 2) {
        isRightMouseDown = false;
    }
})

function grid(num) {

    // Clearing any existing grid
    const existingRows = document.querySelectorAll(".grid-row");
    existingRows.forEach(row => row.remove());

    container.style.setProperty('--grid-size', num)

    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.className = 'grid-row';
        
        for (let j = 0; j < num; j++) {
            let square = document.createElement('div');
            square.className = 'grid-square';

            square.addEventListener("mouseover", () => {

                const getRandomColor = () => {
                    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                }

                if (isMouseDown) {
                    square.style.backgroundColor = getRandomColor();
                } else if (isRightMouseDown) {
                    square.style.backgroundColor = "white";
                }
            });

            square.addEventListener("mousedown", (e) => {
                e.preventDefault();
                const getRandomColor = () => {
                    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                }
                if (e.button === 0) {
                    square.style.backgroundColor = getRandomColor();
                } else if (e.button === 2) {
                    square.style.backgroundColor = "white";
                }
            });

            square.addEventListener("dragstart", (e) => {
                e.preventDefault();
            });

            square.addEventListener("contextmenu", (e) => {
                e.preventDefault();
            })

            row.appendChild(square);
            
        }
        container.appendChild(row)
        
        
    }
    
}

function reset() {
    squares = document.querySelectorAll(".grid-square");
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = "white";
    }
}


const createbutWrapper = document.createElement("div");
createbutWrapper.classList.add("container-button-wrapper");

const createbut = document.createElement("Button");
createbut.textContent = "Create a Grid!";
createbut.classList.add("styled-button"); 
createbutWrapper.appendChild(createbut); 


createbut.addEventListener("click", () => {

    let num = prompt("Enter a grid size (up to 64):")

    if (num === null) {
        return;
    }
    
    while (num < 1 || num > 64) {
        alert( "The grid should be between 1 and 64" )
        num = prompt("Enter a grid size (up to 64):")
        if (num === null) return;
        num = parseInt(num);
    }

    grid(num);
})
buttonContainer.appendChild(createbutWrapper); 


const resetbutWrapper = document.createElement("div");
resetbutWrapper.classList.add("container-button-wrapper");

const resetbut1 = document.createElement("Button");
resetbut1.textContent = "Reset"
resetbut1.classList.add("styled-button"); 
resetbutWrapper.appendChild(resetbut1); 

resetbut1.addEventListener("click", reset);
buttonContainer.appendChild(resetbutWrapper); 