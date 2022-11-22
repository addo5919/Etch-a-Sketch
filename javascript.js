function colorGrid(e) {
    this.style.cssText+="background:black;";
}

let container=document.querySelector("#container");
for(i=1;i<=256;i++) {
    let grid=document.createElement("div");
    grid.id="item"+i;
    grid.className="items";
    // grid.textContent="a";
    grid.style.cssText="width:1px; height:31.3px;";// width is ignored because of flex-basis:0
    container.appendChild(grid);                                      
    if(i%16==0) {
        let lineBreaker = document.createElement("div");
        lineBreaker.style.cssText="flex-basis:100%; height:0px;";
        container.appendChild(lineBreaker);
    }
}
let grids=document.querySelectorAll(".items");
grids.forEach((grid)=> {
    grid.addEventListener("mouseover",colorGrid);
});

