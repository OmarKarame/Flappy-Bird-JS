export default class Bird{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.radius = 40;
        this.velocity = 0;
        this.gravity = 3;


        this.position = {
            x: gameWidth / 2,
            y: gameHeight / 2
        }
    }


    draw(context) {
        context.fillStyle = 'black';
        context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
        context.fill();
    }

    update(deltaTime){
       if (!deltaTime) {return};

       this.velocity += this.gravity;
       this.position.y += this.velocity / deltaTime;
        

    }
}