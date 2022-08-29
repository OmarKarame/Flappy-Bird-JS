import Bird from "./bird.js "

export default class InputHandler{
    constructor(flappy){
        document.addEventListener('keydown', event => {
            switch(event.keyCode){
                case 32:
                    flappy.jump();
            }
        })
    }
}