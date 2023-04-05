// grid reference
gridContainer = document.querySelector('.grid-contianer')
// const box = document.createElement('box')


// grid
// IDEA: use a loop to generate a single box in the grid, and set the stop condition in the
// loop to whatever the inputted number is from the button
let answer = 16;


function createGrid() {
    // loop for multiplying amount of boxes
}

//Box generator function
function createBox() {
    for (i = 0; i < answer; i++) {
        const box = document.createElement('box')
        gridContainer.appendChild('box')
    }
    console.log(answer)
}



// grid generator button
const generateButton = document.querySelector('.grid-button')
generateButton.addEventListener('click', () => {
    answer = prompt('How many sqaures tall and wide do you want your grid?');
    // createBox();
})

createBox()

// Color change for mouse hover