const gridContainer = document.querySelector("#grid-container")
const reset = document.querySelector("#reset")
const color = document.querySelector("#color")


for (let i = 0; i < 16 ** 2; i++) {
    const square = document.createElement('div')

    square.addEventListener('mouseover', () => {
        square.classList.remove('white')
        square.classList.add('black')

    })

    square.classList.add('white')
    square.classList.add('square')
    gridContainer.appendChild(square)
}

const squares = gridContainer.querySelectorAll('.square')

reset.addEventListener('click', () => {
    squares.forEach(sqaure => {
        sqaure.classList.remove('black')
        sqaure.classList.add('white')
    })
        

})