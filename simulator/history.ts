class GameHistory {
	
	public moves : Move[];
	public startingGame : Game;

	constructor(startingGame : Game) {
		this.startingGame = startingGame.clone();
		this.moves = [];
	}

	addMove(move : Move) {
		this.moves.push(move);
	}

	dump() : string {
		var dp = "";
		var g = this.startingGame.clone();
		for (var i = 0; i < this.moves.length; i++) {

		}
	}
}
