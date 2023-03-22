import Tubes from './tube.js';
import Bird from './bird.js';
import InputHandler from './input.js';

let canvas = document.querySelector("#game-screen");
let context = canvas.getContext("2d");
let paused = false;  
let score = 0;
let highScore = 0;

// game dimensions
const gameWidth = canvas.width;
const gameHeight = canvas.height;

// time info
let initialTime = 1;

// creates a new object (Bird) called flappy
let flappy = new Bird(gameWidth, gameHeight);

// creates a new object Tube called tubes
let tubes = new Tubes(gameWidth, gameHeight);

new InputHandler(flappy);

function togglePause()
{
    if (!paused)
    {
        paused = true;
    } else if (paused)
    {
        paused= false;
    }

}

document.addEventListener('keydown', function (e) {
    var key = e.keyCode;
    if (key === 80)// p key
    {
        togglePause();
    }
    });

function resetGame(){
    location.reload();
}

// creates a game loop to update the screen continuously
function gameLoop(finalTime){
    // --physics-- dt = tfinal - tinitial
    let deltaTime = finalTime - initialTime;

    // setting the new initial time to be last frame's final time
    initialTime = finalTime;

    //clears screen every frame
    context.clearRect(0, 0, gameWidth, gameHeight);

    tubes.draw(context);
    flappy.draw(context);

    // create collision detection between flappy and tubes
    if ((flappy.position.y <= tubes.topHeight || 
        flappy.position.y + flappy.radius >= tubes.topHeight + tubes.gap) &&
        ((flappy.position.x + flappy.radius >= tubes.position.x && 
            flappy.position.x + flappy.radius <= tubes.position.x + tubes.width) ||
            (flappy.position.x <= tubes.position.x + tubes.width &&
                flappy.position.x >= tubes.position.x + tubes.width))) { 

        tubes.isMovingLeft = false;
        flappy.collision = true;  
    }

    if ((flappy.position.x == tubes.position.x &&
         flappy.position.y > tubes.topHeight && 
         flappy.position.y < tubes.topHeight + tubes.gap) && tubes.isMovingLeft){
            score++;
            document.getElementById('score').innerHTML = score;
    }

    if (!paused){ 
        flappy.update(deltaTime);
        tubes.update(deltaTime);
    }

    if(flappy.position.y == gameHeight - flappy.radius){
        if(highScore < score){
            highScore = score; 
        }
        if (!paused){
            togglePause();
            document.getElementById('toggle-modal').innerHTML = `
            <div class="popup-modal">
                <h2>Score</h2>
                <h2 id="current-score">${score}</h2>
                <button id="play-again">Play Again</button>
            </div>
        `;
        }

        document.getElementById('play-again').addEventListener('click', resetGame, false);
   }

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


