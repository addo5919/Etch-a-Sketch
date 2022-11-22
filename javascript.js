let container=document.querySelector("#container");
for(i=1;i<=256;i++) {
    let grid=document.createElement("div");
    grid.id="item"+i;
    grid.className="items";
    // grid.textContent="a";
    grid.style.cssText="border:1px solid black; background:green;";
    container.appendChild(grid);
    if(i%16==0) {
        let lineBreaker = document.createElement("div");
        lineBreaker.style.cssText="flex-basis:100%; height:0px;";
        container.appendChild(lineBreaker);
    }
    
}