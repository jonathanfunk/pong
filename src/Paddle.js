let upPressed = false;
let downPressed = false;

export default class Paddle {
  constructor(boardHeight, x, color, keys){
    this.width = 5;
    this.height = 50;
    this.speed = 10;
    this.boardHeight = boardHeight;
    this.x = x;
    this.y = (boardHeight / 2) - (this.height / 2);
    this.color = color;
    this.keys = keys;
    this.upPressed;
    this.downPressed;
    document.addEventListener('keydown',event => this.keyUp(event))
    document.addEventListener('keyup',event => this.keyDown(event))
  }
  ////////

  movePaddle(){
    if (this.upPressed){
      this.moveUp();
    } if (this.downPressed){
      this.moveDown();
    }
  }

  //This controls the paddles
  keyUp(event){
    switch (event.keyCode) {
      case this.keys.up:
      this.upPressed = true;
      console.log(this.upPressed);
      break;
      case this.keys.down:
      this.downPressed = true;
      console.log(this.downPressed);
      break;
      default: return;
    }
  }

  keyDown(event){
    switch (event.keyCode) {
      case this.keys.up:
      this.upPressed = false;
      console.log(this.upPressed);
      break;
      case this.keys.down:
      this.downPressed = false;
      console.log(this.downPressed);
      break;
      default: return;
    }
  }

  /////////

  //This gives the paddle speed, direction and detects collision
  moveUp(){
    if (this.y - this.speed >= 0){
      this.y -= this.speed;
    }
  }
  moveDown(){
    if (this.y + this.height + this.speed <= this.boardHeight){
      this.y += this.speed;
    }
  }

  //This is to give the paddle it's shape using the above constructor values.
  render(context){
    context.fillStyle = this.color;
    context.fillRect(
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.movePaddle();
  }

}
