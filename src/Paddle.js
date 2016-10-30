export default class Paddle {
  constructor(boardHeight, x, color, keys){
    this.width = 5;
    this.height = 50;
    this.speed = 7;
    this.boardHeight = boardHeight;
    this.x = x;
    this.y = (boardHeight / 2) - (this.height / 2);
    this.color = color;
    this.keys = keys;
    document.addEventListener('keydown',event => this.keyListener(event))
  }

  //This controls the paddles
  keyListener(event){
    switch (event.keyCode) {
      case this.keys.up:
      this.moveUp();
      break;
      case this.keys.down:
      this.moveDown();
      break;
      default: return;
    }
  }

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
  }

}
