function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandColor(colors) {
  return colors[getRndInteger(0, colors.length)];
}

const gridContainer = document.querySelector("#grid-container");
const reset = document.querySelector("#reset");
const color = document.querySelector("#color");

for (let i = 0; i < 16 ** 2; i++) {
  const square = document.createElement("div");

  square.addEventListener("mouseover", () => {
    square.classList.remove("white");         
    square.classList.add("black");  // or add a global color value that can be picked and switched 
  });

  square.classList.add("white");    
  square.classList.add("square"); 
  gridContainer.appendChild(square);
}

const SQAURES = gridContainer.querySelectorAll(".square");

reset.addEventListener("click", () => {
  SQAURES.forEach((sqaure) => {
    sqaure.classList.remove("black");
    sqaure.classList.add("white");
  });
});
