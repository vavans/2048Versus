class Game {

	static tilesProba = new Array(2,2,2,2,2,2,4,4,4,4);

	//private board : Board;
	private count : number:

	constructor(private board = new Board()) {
		this.count = 0;
	}

	generateBoardMove() : BoardMove {		
		var value = Game.tilesProba[Math.floor(Math.random()*10)];
		return new BoardMove(this.board.getFirstEmptyCell(), value);
	}

	isOver() : boolean {
		return this.count > 200;
	}

	getScore() : number {
		return this.board.score;
	}

	playerMove(way : number) {
		this.count++;
		for (var i = 0; i < 4; i++) {
			var vcCol = this.board.getCol(way, i);
			this.moveColumn(vcCol);
		}
	}

	boardMove(tile : number, value : number) {
		this.count++;
		if (this.board.get1d[tile] == null) {
			this.board.set1d[tile] = value;
		}	
	}

	clone() : Game {
		return new Game(this.board.clone());
	}

	dumpBoard() : string {
	    var html = '<ul style="display: inline-block">';
	    html += "<li>score: " + this.board.score  + "</li>";
	    for (var y = 3; y >= 0; y--) {
	        html += "<li>";
	        for (var x = 0; x < 4; x++) {
	            html += this.board.get(x, y) + " ";
	        }    
	        html += "</li>";	
	    }
	    html += "</ul>";
	    return html;
	}

	private canGoDeeper(c : VirtualColumn, idx : number, value : number, min_y : number) : boolean {
		return (idx >= min_y && (c.get(idx) === 0 || (c.get(idx) === value)));
	}

	private moveColumn(vc : VirtualColumn) : void {
		var miny = 0;
		for (var y = 1; y < 4; y++) {	   
			var v = vc.get(y);
			if (v === 0)
				continue;
			vc.set(y,0);

			var ny = y - 1;

			var destination = y;

			while(this.canGoDeeper(vc, ny, v, miny)) {
				destination = ny;
				if (vc.get(ny) === v) {
					vc.set(ny,0);
					v *= 2;
					this.board.score += v;
					miny = ny + 1;
				}
				ny--;
			}
			vc.set(destination, v);
		}
	}
}

