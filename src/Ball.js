const size = 5;
const wav1 = new Audio('sounds/pong-01.wav');
const wav2 = new Audio('sounds/pong-02.wav');
const wav3 = new Audio('sounds/pong-03.wav');
let gameStart = false;


export default class Ball {
  constructor(start) {
    this.x = 150;
    this.y = 75;
    this.vy = Math.floor(Math.random() * 12 - 6); // y direction
    this.vx = (7 - Math.abs(this.vy)); // x direction
    this.size = size;
    this.start = start;
    this.radius= size/2;
    document.addEventListener('keydown',event => this.keyListener(event))
  }

  //This renders ball shape, bounce, score and paddle collosion
  render(context, p1, p2, p1Score, p2Score){
    this.x;
    this.y;
    this.draw(context);
    this.bounce();
    this.score(p1, p2, p1Score, p2Score);
    this.paddleCollision(p1, p2);
    this.go();
  }

  //This sets the gameStart variable to true which will then activate go()
  keyListener(event){
    switch (event.keyCode) {
      case this.start.go:
      gameStart = true;
      break;
      default: return;
    }
  }

  //This calls for the start of the game if gameStart is true
  go(){
    if(gameStart === true){
      this.x += this.vx;
      this.y += this.vy;
    } else if (gameStart === false){
      this.x = 150;
      this.y = 75;
    }
  }

  //This makes the ball start
  draw(context) {
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fill();
    context.closePath();
  }

  //This makes the ball bounce once it hits the top/bottom of canvas
  bounce(){
    if(this.y <= 0 + this.radius|| this.y >= 150 - this.radius){
      wav1.play();
      this.vy *= -1;
    }
  }

  //This will add score & reset the ball
  reset(player){
    wav1.play();
    this.x = 150;
    this.y = 75;
    this.vx *= -1;
    player.score++
  }

  //This will reset the scores for both teams to 0 after game over
  again(p1Score, p2Score){
    gameStart = false;
    p1Score.score = 0;
    p2Score.score = 0;
  }


  //This calls for the score increment/reset function after conditions are made
  score(p1, p2, p1Score, p2Score){
    if(this.x >= game.width){
      this.reset(p1Score);
      if(p1Score.score === 10){
        this.again(p1Score, p2Score);
        alert("Player 1 wins!");
      }
    } else if (this.x <= 0 + this.radius){
      this.reset(p2Score);
      if(p2Score.score === 10){
        this.again(p1Score, p2Score);
        alert("Player 2 wins!");
      }
    }
  }

  //This makes the ball bounce off the paddles
  paddleCollision(p1, p2) {
    if (this.vx > 0) {
      const inRightEnd = p2.x <= this.x + this.size &&
      p2.x > this.x - this.vx + this.size;

      if (inRightEnd) {
        const collisionDiff = this.x + this.size - p2.x;
        const k = collisionDiff / this.vx;
        const y = this.vy * k + (this.y - this.vy);
        const hitRightPaddle = y >= p2.y && y + this.radius <=
        p2.y + p2.height;
        if (hitRightPaddle) {
          wav2.play();
          this.x = p2.x - this.radius;
          this.y = Math.floor(this.y - this.vy + this.vy * k);
          this.vx = -this.vx;
        }
      }
    } else {
      const inLeftEnd = p1.x + p1.width >= this.x;
      if (inLeftEnd) {
        const collisionDiff = p1.x + p1.width - this.x;
        const k = collisionDiff / -this.vx;
        const y = this.vy * k + (this.y - this.vy);
        const hitLeftPaddle = y >= p1.y && y + (this.size - p1.width) - p1.width <=
        p1.y + p1.height;
        if (hitLeftPaddle) {
          wav2.play();
          this.x = p1.x + p1.width;
          this.y = Math.floor(this.y - this.vy + this.vy * k);
          this.vx = -this.vx;
        }
      }
    }
  }
}
