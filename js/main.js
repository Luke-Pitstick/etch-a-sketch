const gridContainer = document.querySelector("#grid-container")


for (let i = 0; i < 16 ** 2; i++) {
    const square = document.createElement('div')
    square.classList.add('white')
    square.classList.add('square')
    gridContainer.appendChild(square)
    console.log(i);         
}

