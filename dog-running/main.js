const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// setting the height and width of canvas width and height
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// create image object
const dogImg = new Image();
dogImg.src = './shadow_dog.png';

// png formating
const spriteWidth = 573;
const spriteHeight = 523;

let frameX = 0;
let frameY = 9;

// Game frame controller
let gameFrame = 0;
let gameStagger = 5;

// sprite info object
const dogFrameList = [7, 7, 7, 9, 11, 5, 7, 7, 12, 4]

// Function that contains all the animation code
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / gameStagger) % dogFrameList[frameY];
    frameX = spriteWidth * position;
    ctx.drawImage(dogImg, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameFrame++;

    requestAnimationFrame(animate);
}

animate()

