export default class ScoreBoard {
   constructor(x) {
      this.x = x;
      this.y = 85;
      this.score = 0;
   }

   render(context){
     this.draw(context);
   }

   draw(context) {
     context.fillStyle = 'white';
      context.font = "30px Helvetica";
      context.fillText(this.score, this.x, this.y);
   }
}
