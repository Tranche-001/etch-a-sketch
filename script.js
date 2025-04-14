const container = document.querySelector("#container")


const GRID_SIZE = 16;
for(let i=0; i<GRID_SIZE*GRID_SIZE; i++){
  const gridUnit = document.createElement("div");
  gridUnit.classList.add("gridUnit");
  container.appendChild(gridUnit);
}
const gridMatrix = document.querySelectorAll("gridUnit")

gridMatrix.forEach((gridUnit) => {
  gridUnit.addEventListener("mouseenter", (e) => {
    e.target.style["background-color"] = "gray";
  })
})