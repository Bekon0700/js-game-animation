const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// setting the height and width of canvas width and height
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// animation type
let animationType = 'idle';

// get animation name
const animationName = document.getElementById('animation-name')
animationName.addEventListener('change', function(e) {
    animationType = e.target.value;
})

// create image object
const dogImg = new Image();
dogImg.src = './shadow_dog.png';

// png formating
const spriteWidth = 573;
const spriteHeight = 523;

// Game frame controller
let gameFrame = 0;
let gameStagger = 5;

// sprite info object
const dogFrameList = [
    {
        name: 'idle',
        frameCount: 7
    },
    {
        name: 'jump',
        frameCount: 7
    },
    {
        name: 'fall',
        frameCount: 7
    },
    {
        name: 'run',
        frameCount: 9
    },
    {
        name: 'dizzy',
        frameCount: 11
    },
    {
        name: 'sit',
        frameCount: 5
    },
    {
        name: 'roll',
        frameCount: 7
    },
    {
        name: 'bite',
        frameCount: 7
    },
    {
        name: 'KO',
        frameCount: 12
    },
    {
        name: 'gethit',
        frameCount: 4
    },
];

const spriteAnimationList = {};
dogFrameList.forEach((val, ind) => {
    let frames = {
        loc: []
    };
    for (let i = 0; i < val.frameCount; i++) {
        let x = i * spriteWidth;
        let y = ind * spriteHeight;
        frames.loc.push({ x, y });
    }
    spriteAnimationList[val.name] = frames;
});


// Function that contains all the animation code
function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame / gameStagger) % spriteAnimationList[animationType].loc.length;
    let frameX = position * spriteWidth;
    let frameY = spriteAnimationList[animationType].loc[0].y;
    ctx.drawImage(dogImg, frameX, frameY, spriteWidth, spriteHeight, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    gameFrame++;

    requestAnimationFrame(animate);
}

animate()

