const gridContainer = document.querySelector("#grid-container")
const reset = document.querySelector("#id")
const color = document.querySelector("#color")


for (let i = 0; i < 16 ** 2; i++) {
    const square = document.createElement('div')

    square.addEventListener('mouseover', () => {
        square.classList.add('black')

    })

    square.classList.add('white')
    square.classList.add('square')
    gridContainer.appendChild(square)
}



