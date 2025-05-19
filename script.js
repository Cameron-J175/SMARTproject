let size = 20
var timer;
let direction = "up";
var theBlock;

function drawGrid() {
    for(let i = 0; i< size; i++) {
        let row = document.createElement("tr");
        for(let x = 0; x < size; x++) {
            let cell = document.createElement("td");
            row.appendChild(cell)
        }
        document.getElementbyId("grid").appendChild(row)
    }
}
