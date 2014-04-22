// Two kinds of moves : 
// moves done by the player moving the tiles along the board
// moves done by the game spawning a tile somewhere
interface Move {
	isValid() : boolean;
	apply(game : Game) : void;
}

class PlayerMove implements Move {
	public way : number;

	constructor(way : number);
	constructor(way : string);
	constructor(way : any) {
		if (typeof way === "string") {
			switch(way) {
				case "left":
					this.way = 0;
					break;			
				case "top":
					this.way = 1;
					break;
				case "right":
					this.way = 2;
					break;
				case "bot":
					this.way = 3;
					break;
			}
		}
		else {
			this.way = way;
		}
	}

	apply(game : Game) {
		game.playerMove(this.way);
	}

	isValid() : boolean {
		return 0 <= this.way && this.way <= 4;
	}
}

class BoardMove implements Move {
	constructor(public x : number, public value : number) {}

	apply(game : Game) {
		game.boardMove(this.x, this.value);
	}

	isValid() : boolean {
		return this.x > -1;
	}
}