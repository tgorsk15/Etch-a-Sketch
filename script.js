// grid reference
const gridContainer = document.querySelector('.grid-container')
// const box = document.createElement('div')


// grid
// IDEA: use a loop to generate a single box in the grid, and set the stop condition in the
// loop to whatever the inputted number is from the button
let answer = 16;


// act of creating boxes within each row
function createBoxes() {
    // for (i = 0; i <answer; i++) {
    //     const box = document.createElement('div')
    //     box.classList.add('box')
    //     row.appendChild(box)
    // }
}

//Box generator function
function createRow() {
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

    // for (i = 0; i < answer; i++) {
    //     const box = document.createElement('div');
    //     box.classList.add('box');

    // }

    // const boxes = document.querySelectorAll('box')
    // boxes.forEach((box) => {
    //     box.style.border = '2px limegreen'
    //     console.log('done')
    // })
    
}



// grid generator button
const generateButton = document.querySelector('.grid-button')
generateButton.addEventListener('click', () => {
    answer = prompt('How many sqaures tall and wide do you want your grid?  (MAX NUMBER: 100');
    if (answer < 101) {
        createRow()
    } else {
        alert('This is not a valid answer');
        answer = prompt('How many sqaures tall and wide do you want your grid?');
        createRow();
    }
    // createBox();
})

createRow()

// Color change for mouse hover