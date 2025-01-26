const generateDiv = document.querySelector('#generator');
const resetButton = document.querySelector('#reset');
const grid = document.querySelector(".grid");

// Function to create a grid of divs
function createGrid(size) {
    grid.innerHTML = ''; // Clear the grid
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('genDivs');
        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = 'black';
        });
        grid.appendChild(newDiv);
    }
}

// Generate a default grid on page load
createGrid(16);

// Event listener for the "Generate Div" button
generateDiv.addEventListener('click', () => {
    const size = prompt("Enter the number of squares per side (e.g., 16 for a 16x16 grid):");
    if (size && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Event listener for the "Reset Grid" button
resetButton.addEventListener('click', () => {
    grid.innerHTML = ''; // Clear the grid
    createGrid(16); // Generate a default grid
});