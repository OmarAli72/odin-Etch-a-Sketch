const generateDiv = document.querySelector('#generator');
const Grid = document.querySelector(".grid");

generateDiv.addEventListener('click', () => {
    //creates the div
    const newDiv = document.createElement('div');
    //styles the div
    newDiv.classList.add('genDivs');
    newDiv.addEventListener('mouseenter', () => {
        newDiv.style.backgroundColor = 'black';
    });
    Grid.appendChild(newDiv);
})
