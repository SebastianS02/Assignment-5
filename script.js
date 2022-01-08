let cells = 3;
let selectedColor = "red";
let coloring = false; 

function addRows(){
  let table = document.getElementById("table");
  let row = document.createElement("tr");
  row.classList.add("row");
  table.appendChild(row);
  for (let i = 0; i < cells; i++){
    let cell = document.createElement("td");
    helperFunction(cell);
    row.appendChild(cell);
  }
}

function addColumns(){
    cells++;
    let newRows = document.getElementsByClassName("row");
    tr = [...newRows];
    for (let i = 0; i < tr.length; i++){
      let cell = document.createElement("td");
      helperFunction(cell);
      tr[i].appendChild(cell);
    }
}

function removeRow(){
    let rows2 = document.getElementsByClassName("row");
    tr = [...rows2];
    if (tr.length == 0){
      return;
    }
    tr[tr.length - 1].parentNode.removeChild(tr[tr.length - 1]);
    if (tr.length == 1){
      cells = 1;
    }
}

function removeColumns(){
    if (cells == 1){
      return;
    }
    cells--;
    let rows3 = document.getElementsByClassName("row");
    tr = [...rows3];
    for (let i = 0; i < tr.length; i++) {
      tr[i].removeChild(tr[i].lastChild);
    }
}

const selectColor = (color) => selectedColor = color;

function helperFunction(cell) {
    cell.classList.add("uncolored");
    cell.addEventListener("click", changeColor);
    cell.addEventListener("mousedown", (e) => coloring = true);
    cell.addEventListener("mousemove", (e) => {
    if (coloring){
        cell.style.backgroundColor = selectedColor;
    }
    });
    cell.addEventListener("mouseup", (e) => {
      if (coloring) {
        coloring = false;
      }
    });
  }
  
function changeColor() {
    this.style.backgroundColor = selectedColor;
    this.classList.remove("uncolored");
}

function bucketTool(){
    let cells = document.getElementsByTagName("td");
    let cells2 = [...cells];
    cells2.forEach((cell) => {
      cell.style.backgroundColor = selectedColor;
      cell.classList.remove("uncolored");
    });
}

function fillUncolored() {
    let cells = document.getElementsByTagName("td");
    let cls = [...cells];
    let uncoloredCells = cls.filter((cell) => {
      return cell.classList.contains("uncolored");
    });
    uncoloredCells.forEach((cell) => {
      cell.style.backgroundColor = selectedColor;
      cell.classList.remove("uncolored");
    });
}

function clearAll() {
    let cells5 = document.getElementsByTagName("td");
    let cls = [...cells5];
    cls.forEach((cell) => {
      cell.style.backgroundColor = "whitesmoke";
      cell.classList.add("uncolored");
    });
}