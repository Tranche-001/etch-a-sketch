const container = document.querySelector("#container")


const GRID_SIZE = 16;
for(let i=0; i<GRID_SIZE*GRID_SIZE; i++){
  const gridUnit = document.createElement("div");
  gridUnit.classList.add("gridUnit");
  gridUnit.id = "gridUnit";
  container.appendChild(gridUnit);
}
const gridMatrix = document.querySelectorAll("#gridUnit")
console.log(gridMatrix);
gridMatrix.forEach((gridUnit) => {
  gridUnit.addEventListener("mouseenter", (e) => {
    console.log("AAAAAA");
    e.target.style["background-color"] = "gray";
  })
})