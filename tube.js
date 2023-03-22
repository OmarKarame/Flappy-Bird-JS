export default class Tubes{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        const gap = 250;
        this.gap = gap;

        this.width = 80;
        this.topHeight = Math.floor(Math.random() * (this.gameHeight/1.5 - this.gameHeight/4)) + this.gameHeight/3;
        this.bottomHeight = this.gameHeight - this.topHeight - gap;
        this.velocity = -5;
        this.isMovingLeft = true;

        this.position = {
            x: gameWidth * 2,
            topY: 0,
            bottomY: this.topHeight + gap
        }
    }

    draw(context){
        context.fillRect(this.position.x, this.position.topY, this.width, this.topHeight);
        context.fillRect(this.position.x, this.position.bottomY, this.width, this.bottomHeight);
        context.fill();  
    }
    update(deltaTime){
        if (!deltaTime) {return}; 

        if(this.position.x <= -this.gameWidth + this.width){
            this.position.x = this.gameWidth;
            this.topHeight = Math.floor(Math.random() * (this.gameHeight/2 - this.gameHeight/4)) + this.gameHeight/3;  
            this.position.bottomY = this.topHeight + this.gap;
            this.bottomHeight = this.gameHeight - this.topHeight - this.gap;
        }
        else if(this.isMovingLeft){
            this.position.x += this.velocity;
        }
    }
}