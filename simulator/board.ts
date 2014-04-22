//Represents the tiles with the tiles
class Board {
	//private tiles : number[];
	public score : number;

	constructor(private tiles = new Array(16)) {
	}

	get(x : number, y : number) : number {
		return this.tiles[x + y * 4];
	}

	set(x : number, y : number, value : number) : void {
		this.tiles[x + y * 4] = value;
	}
	
	get1d(x : number) : number {
		return this.tiles[x];
	}

	set1d(value : number, x : number) : void {
		this.tiles[x] = value;
	}

	getFirstEmptyCell() : number {
		for (var x = 0; x < 16; x++) {
			if (this.tiles[x] == null) {
				return x;
			}
 	   	}
 	   	return -1;
	}

	//build the column projection depending on the move (way)
	getCol(way : number, colIdx : number) : VirtualColumn {
		switch (way) {
			case 1:
			return new VCDown(this, colIdx);
			case 2:
			return new VCLeft(this, colIdx);
			case 3:
			return new VCUp(this, colIdx);
			case 4:
			return new VCRight(this, colIdx);
		}
	}

	clone() : Board {
		return new Board(this.tiles.slice(0));
	}
}

//Describe a mapping between the real tiles and a virtual colmun
//A virtual column can be used with the same algorythme for each move
interface VirtualColumn {
	set(idx : number, value : number) : void; 
	get(idx : number) : number;
}

class VCDown implements VirtualColumn {
	constructor(private board : Board, private colIdx : number) {

	}

	set(idx : number, value : number) {
		this.board.set(this.colIdx, idx, value);
	}

	get(idx : number) : number {
		return this.board.get(this.colIdx, idx);
	}
}

class VCLeft implements VirtualColumn {
	constructor(private board : Board, private colIdx : number) {

	}

	set(idx : number, value : number) {
		this.board.set(idx, this.colIdx, value);
	}

	get(idx : number) : number {
		return this.board.get(idx, this.colIdx);
	}
}

class VCUp implements VirtualColumn {
	constructor(private board : Board, private colIdx : number) {

	}

	set(idx : number, value : number) {
		this.board.set(this.colIdx, 3 - idx, value);
	}

	get(idx : number) : number {
		return this.board.get(this.colIdx, 3 - idx);
	}
}

class VCRight implements VirtualColumn {
	constructor(private board : Board, private colIdx : number) {

	}

	set(idx : number, value : number) {
		this.board.set(3 - idx, this.colIdx, value)
	}

	get(idx : number) : number {
		return this.board.get(3 - idx, this.colIdx);
	}
}
