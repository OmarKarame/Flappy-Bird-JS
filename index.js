import Bird from './bird.js';

let canvas = document.querySelector("#game-screen");
let context = canvas.getContext("2d");

// game dimensions
const gameWidth = canvas.width;
const gameHeight = canvas.height;

// time info
let initialTime = 0;

// creates a new object (Bird) called flappy
let flappy = new Bird(gameWidth, gameHeight);

// creates a game loop to update the screen continuously
function gameLoop(finalTime){
    // --physics-- dt = tfinal - tinitial
    let deltaTime = finalTime - initialTime;

    // setting the new initial time to be last frame's final time
    initialTime = finalTime;

    // calls the draw function on flappy
    flappy.draw(context);

    //clears screen every frame
    context.clearRect(0, 0, gameWidth, gameHeight);

    flappy.update(deltaTime);
    flappy.draw(context);


    requestAnimationFrame(gameLoop);
}

gameLoop();























// context.fillStyle = '#000';
// context.fillRect(150, 330, 100, 100);

// context.beginPath()
// context.moveTo(190, 415)
// context.lineTo(230, 415)
// context.strokeStyle = 'black'
// context.lineWidth = 10;
// context.stroke()



// context.arc(canvas.width / 2, canvas.height / 2, 55, 0, Math.PI * 2, false);
// context.fill();


