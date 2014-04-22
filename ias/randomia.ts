class RandomIA implements Ia {
	constructor() {

	}

	start(game : Game) {

	}

	getMove(game : Game) : number {
		var way = Math.floor(Math.random() * 4);
		return way;
	}
}