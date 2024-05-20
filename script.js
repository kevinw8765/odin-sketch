container = document.querySelector(".container");

container.style.border= "5px solid black";
container.style.borderWidth = "thin";
container.style.width = "500px";
container.style.height = "500px";

gamePad = document.querySelector(".gamepad");

function createGrid(n = 16) {
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            d = document.createElement("div");
            d.style.boxSizing = "border-box";
            let scale = 500/n;
            d.style.height = scale + "px";
            d.style.width = scale + "px";
            d.style.border = "5px solid black";
            d.style.borderWidth = "thin";
            
            container.appendChild(d);
        
            d.classList.add("pixel")
        }
    }
}
createGrid();
getPixels();

function getPixels() {
    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach(pixel => {
    pixel.addEventListener("mouseover", () => { 
        draw(pixel);
    });
    });
    return pixels;
}


function draw(pixel) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    let color = "rgb(" + x + "," + y + "," + z + ")";

    pixel.style.backgroundColor = color;
}

btn = document.createElement("button");
btn.textContent = "Reset Grid";

gamePad.appendChild(btn);

btn.addEventListener("click", reset)

function reset() {
    input = prompt("Enter new grid size: ");
    input = parseInt(input);
    if (input <= 100)
    {
        removeGrid();
        createGrid(input);
        getPixels();
    }

function removeGrid() {
    const pixels = getPixels();
    pixels.forEach(pixel => {
        container.removeChild(pixel);
    })
}


}