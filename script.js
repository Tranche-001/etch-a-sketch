const container = document.querySelector("#container")
const btn = document.querySelector("button");
const CONTAINER_WIDTH = 640;
container.style.width = CONTAINER_WIDTH + 'px';
container.style.height = CONTAINER_WIDTH + 'px';
function createGrid(grid_size) {
  for(let i=0; i<grid_size*grid_size; i++){
    const gridUnit = document.createElement("div");
    gridUnit.classList.add("gridUnit");
    gridUnit.id = "gridUnit";
    container.appendChild(gridUnit);
  }
  const gridMatrix = document.querySelectorAll("#gridUnit")
  console.log(gridMatrix);

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  
  

  gridMatrix.forEach((gridUnit) => {
    gridUnit.style.width = CONTAINER_WIDTH/grid_size + 'px';
    gridUnit.style.height = CONTAINER_WIDTH/grid_size + 'px';
    gridUnit.addEventListener("mouseenter", (e) => {
      let color = randomHexColorCode();
      e.target.style["background-color"] = color;
    })
  })
}

function deleteGrid(){
  const gridMatrix = document.querySelectorAll("#gridUnit");
  gridMatrix.forEach((gridUnit) => {
    container.removeChild(gridUnit);
  })
}



// 
const errorMsg = document.createElement("div");
container.appendChild(errorMsg);

btn.addEventListener("click", (e) => {
  let answer = prompt("Choose a number of squares per side")
  deleteGrid();
  if(answer>100){
    errorMsg.textContent = "Choose a smaller number. No greater than 100.";
  }
  else{
    errorMsg.textContent = "";
    createGrid(answer);
  }
  
})

console.log(container.style.width);
