import Paddle from './Paddle';
import Ball from './Ball';
import ScoreBoard from './Score';
import {p1Keys, p2Keys, Start} from './Keys';
export default class Game {

	//This will construct the canvas and bring in the paddle and balls
	constructor() {
		const canvas = document.getElementById('game');
		this.width = canvas.width;
		this.height = canvas.height;
		this.context = canvas.getContext('2d');
		this.context.fillStyle = 'white';

    //Instances of ball, player 1, player 2 and their keys are created here
    this.p1 = new Paddle(this.height, 10, 'white', p1Keys);
    this.p2 = new Paddle(this.height, this.width - 4 - 10, 'white', p2Keys);
    this.p1Score = new ScoreBoard(72);
    this.p2Score = new ScoreBoard(225);
    this.ball = new Ball(Start);
	}

	//This will make a dashed draw line
	drawLine() {
		this.context.setLineDash([5, 3]);
		this.context.beginPath();
		this.context.moveTo(150,150);
		this.context.lineTo(150,0);
		this.context.strokeStyle = 'white';
		this.context.stroke();
	}

	//This will stop the bleeding
	drawBoard(){
		this.context.fillStyle = "black"
		this.context.fillRect(0,0, this.width, this.height)
		this.drawLine();
	}

	//This will call the drawboard, ball and players every 30 ms
	render(){
		this.drawBoard();
    this.p1.render(this.context);
    this.p2.render(this.context);
    this.p1Score.render(this.context);
    this.p2Score.render(this.context);
    this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score);
	}
}
