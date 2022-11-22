function colorGrid(e) {  //this is for each grid (div)
    this.style.cssText+="background:black;";
}

function changeBoardSize(e) {
    let noOfColumns=Number(input.value);
    if(noOfColumns<16 || noOfColumns>100) {
        alert("Please enter a value from 16-100");
        return;
    }
    let container=document.querySelector("#container");
    container.textContent=""; //clearing all the divs (grids) from the container div
    // let grids=document.querySelectorAll(".items");
    // grids.forEach((grid)=> {
    //     grid.style.background="white";
    // });
    createBoard(noOfColumns);
}

function createBoard(noOfColumns) {                     //here no of columns = no of rows;
    let container=document.querySelector("#container");
    let noOfGrids=noOfColumns*noOfColumns;
    for(i=1;i<=noOfGrids;i++) {
        let grid=document.createElement("div");
        grid.id="item"+i;
        grid.className="items";
        // grid.textContent="a";
        grid.style.cssText="width:1px; height:31.3px;";// width is ignored because of flex-basis:0
        container.appendChild(grid);                                      
        if(i%noOfColumns==0) {
            let lineBreaker = document.createElement("div");
            lineBreaker.style.cssText="flex-basis:100%; height:0px;";
            container.appendChild(lineBreaker);
        }
    }
    let grids=document.querySelectorAll(".items");
    grids.forEach((grid)=> {
        grid.addEventListener("mouseover",colorGrid);
    });
}

createBoard(16);
let input=document.querySelector("input");
let button=document.querySelector("button");
button.addEventListener("click",changeBoardSize);