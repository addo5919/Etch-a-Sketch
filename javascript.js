let color="black"; //this variable is used to assign color to div's during mouseover event

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
        grid.addEventListener("mouseover",(e)=>{
            if(color=="black") {
              e.target.style.background="black";
            }
            else if(color=="random") {
                let r=Math.floor(Math.random()*256);
                let g=Math.floor(Math.random()*256);
                let b=Math.floor(Math.random()*256); 
                e.target.style.background=`rgb(${r},${g},${b})`;
            }
            else if(color=="erase") {
                e.target.style.background="";
            }
        });
        container.appendChild(grid);                                      
        if(i%noOfColumns==0) {
            let lineBreaker = document.createElement("div");
            lineBreaker.style.cssText="flex-basis:100%; height:0px;";
            container.appendChild(lineBreaker);
        }
    }
}

createBoard(16);

let input=document.querySelector("input");
let boardSizeBtn=document.querySelector("#boardSizeBtn");
let blackBtn=document.querySelector("#blackBtn");
let randomBtn=document.querySelector("#randomBtn");
let eraseBtn=document.querySelector("#eraseBtn");

boardSizeBtn.addEventListener("click",changeBoardSize);
blackBtn.addEventListener("click",(e)=> { color="black"; });
randomBtn.addEventListener("click",(e)=> { color="random"; });
eraseBtn.addEventListener("click",(e)=> { color="erase"; });
