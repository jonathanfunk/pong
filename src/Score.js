export default class ScoreBoard {
   constructor(x, y) {
      this.x = x;
      this.y = y;
      this.score = 0;
   }

   render(context){
     this.draw(context);
   }

   draw(context) {
      context.font = "30px Helvetica";
      context.fillText(this.score, this.x, this.y);
   }
}
