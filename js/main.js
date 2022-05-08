function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandColor(colors) {
  return colors[getRndInteger(0, colors.length)];
}

const gridContainer = document.querySelector("#grid-container");
const reset = document.querySelector("#reset");
const color = document.querySelector("#color");
const colorPicker = document.querySelector("#colorselector")
let pickedColor = '#000000'

colorPicker.value = '#ffffff'


for (let i = 0; i < 16 ** 2; i++) {
  const square = document.createElement("div");

  square.addEventListener("mouseover", () => {
    square.classList.remove("white");         
    square.style.backgroundColor = pickedColor  
  });

  square.style.backgroundColor = "#ffffff"
  square.classList.add("square"); 
  gridContainer.appendChild(square);
}

const SQAURES = gridContainer.querySelectorAll(".square");

reset.addEventListener("click", () => {
  SQAURES.forEach((sqaure) => {;
    sqaure.style.backgroundColor = '#ffffff'
  });
});

colorPicker.addEventListener('input', () => {
    pickedColor = colorPicker.value

})