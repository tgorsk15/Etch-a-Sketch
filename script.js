// grid reference
const gridContainer = document.querySelector('.grid-container')
// const box = document.createElement('div')


// grid
// IDEA: use a loop to generate a single box in the grid, and set the stop condition in the
// loop to whatever the inputted number is from the button
let answer;


// grid deletion and reset function
function deleteGrid() {
    const box2 = document.querySelectorAll('.box')
    box2.forEach(box => {
        box.remove();
    })

    const row2 = document.querySelectorAll('.row')
    row2.forEach(row => {
        row.remove();
    });
}

//Grid generator function
function createGrid() {
    for (i = 0; i < answer; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);

        for (j = 0; j <answer; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
            
        }

    }
}



// grid generator button
// PROBLEM: button doesn't create a new grid after inputting a second answer
// ... turns out it is adding a new grid to the bottom of the old ... need to
// delete the inital one
const generateButton = document.querySelector('.grid-button')
generateButton.addEventListener('click', () => {
    // *NEED to probs insert deleteGrid() function here
    deleteGrid();
    answer = prompt('How many sqaures tall and wide do you want your grid?  (MAX NUMBER: 100');
    if (answer < 101) {
        createGrid()
    } else {
        alert('This is not a valid answer');
        answer = prompt('How many sqaures tall and wide do you want your grid?');
        createGrid();
    }
})



// Color change for mouse hover