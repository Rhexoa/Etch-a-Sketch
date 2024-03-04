let container = document.querySelector('#container');
let sizeButton = document.querySelector('#sizeButton');
let resetButton = document.querySelector('#resetButton')
let size = 16;

sizeButton.addEventListener('click', () => {
    size = parseInt(prompt('Enter a number'));
    if(isNaN(size)){
        alert("invalid input");
        return;
    }
    container.textContent = '';
    makeGrid(Math.min(size, 100));
})

resetButton?.addEventListener('click', () => {
    for(let square of container.children){
        square.style.backgroundColor = "";
    }
})

function makeGrid(size){
    for(let i=0; i< size*size; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;

        square.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            if (square.style.backgroundColor == ""){
                square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
        })
        container.appendChild(square);
    }
}

makeGrid(size);