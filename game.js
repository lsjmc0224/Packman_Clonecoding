const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const pacmanFrames = document.getElementById("animation");
const ghostFrames = document.getElementById("ghosts");

let createRect = (x,y,width, height, color) => {
    canvasContext.fillStyle = color;
    canvasContext.fillRect(x, y, width, height);
};
let fps = 30;
let oneBlockSize = 20;
let wallColor = "#342DCA";

let map= [
    [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1],
    [1,2,2,2,2, 2,2,2,2,2, 1,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1, 2,1,1,1,2, 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,1,1,1, 2,1,1,1,2, 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1, 2,1,2,1,1, 1,1,1,2,1, 2,1,1,1,2, 1],
    [1,2,2,2,2, 2,1,2,2,2, 1,2,2,2,1, 2,2,2,2,2, 1],
    [1,1,1,1,1, 2,1,1,1,2, 1,2,1,1,1, 2,1,1,1,1, 1],
    [2,2,2,2,1, 2,1,2,2,2, 2,2,2,2,1, 2,1,2,2,2, 2],
    [1,1,1,1,1, 2,1,2,1,1, 2,1,1,2,1, 2,1,1,1,1, 1],
    [2,2,2,2,2, 2,2,2,1,2, 2,2,1,2,2, 2,2,2,2,2, 2],
    [1,1,1,1,1, 2,1,2,1,2, 2,2,1,2,1, 2,1,1,1,1, 1],
    [2,2,2,2,1, 2,1,2,1,2, 2,2,1,2,1, 2,1,2,2,2, 2],
    [2,2,2,2,1, 2,1,2,2,2, 2,2,2,2,1, 2,1,2,2,2, 2],
    [1,1,1,1,1, 2,2,2,1,1, 1,1,2,2,2, 1,1,1,1,1, 1],
    [1,2,2,2,2, 2,2,2,2,2, 1,2,2,2,2, 2,2,2,2,2, 1],
    [1,2,1,1,1, 2,1,1,1,2, 1,2,1,1,1, 2,1,1,1,2, 1],
    [1,1,2,2,1, 2,1,2,1,1, 1,1,1,2,1, 2,1,2,2,1, 1],
    [1,2,2,2,2, 2,1,2,2,2, 1,2,2,2,1, 2,2,2,2,2, 1],
    [1,2,1,1,1, 1,1,1,1,2, 1,2,1,1,1, 1,1,1,1,2, 1],
    [1,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 2,2,2,2,2, 1],
    [1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1,1,1,1,1, 1],
];

let gameLoop = () => {
    update();
    draw();
};

let update = () => {
    //todo
};

let draw = () => {
    createRect(0, 0, canvas.width, canvas.height, "black");
    //todo
    drawWalls();
};

let gameInterval = setInterval(gameLoop, 1000/fps);


let drawWalls = () => {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; i < map[0].length; j++) {
            if(map[i][j] == 1) { 
                // then it is wall
                createRect(
                    j * oneBlockSize, 
                    i * oneBlockSize, 
                    oneBlockSize, 
                    oneBlockSize, 
                    wallColor
                );
            }
        }
    }
};