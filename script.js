const container = document.querySelector("#container")
const btn = document.querySelector("button");

function createGrid(grid_size) {
  for(let i=0; i<grid_size*grid_size; i++){
    const gridUnit = document.createElement("div");
    gridUnit.classList.add("gridUnit");
    gridUnit.id = "gridUnit";
    container.appendChild(gridUnit);
  }
  const gridMatrix = document.querySelectorAll("#gridUnit")
  console.log(gridMatrix);
  gridMatrix.forEach((gridUnit) => {
    gridUnit.addEventListener("mouseenter", (e) => {
      e.target.style["background-color"] = "gray";
    })
  })
}

function deleteGrid(){
  const gridMatrix = document.querySelectorAll("#gridUnit");
  gridMatrix.forEach((gridUnit) => {
    container.removeChild(gridUnit);
  })
}

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