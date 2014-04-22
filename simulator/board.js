//Represents the tiles with the tiles
var Board = (function () {
    function Board(tiles) {
        if (typeof tiles === "undefined") { tiles = new Array(16); }
        this.tiles = tiles;
    }
    Board.prototype.get = function (x, y) {
        return this.tiles[x + y * 4];
    };

    Board.prototype.set = function (x, y, value) {
        this.tiles[x + y * 4] = value;
    };

    Board.prototype.get1d = function (x) {
        return this.tiles[x];
    };

    Board.prototype.set1d = function (value, x) {
        this.tiles[x] = value;
    };

    Board.prototype.getFirstEmptyCell = function () {
        for (var x = 0; x < 16; x++) {
            if (this.tiles[x] == null) {
                return x;
            }
        }
        return -1;
    };

    //build the column projection depending on the move (way)
    Board.prototype.getCol = function (way, colIdx) {
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
    };

    Board.prototype.clone = function () {
        return new Board(this.tiles.slice(0));
    };
    return Board;
})();


var VCDown = (function () {
    function VCDown(board, colIdx) {
        this.board = board;
        this.colIdx = colIdx;
    }
    VCDown.prototype.set = function (idx, value) {
        this.board.set(this.colIdx, idx, value);
    };

    VCDown.prototype.get = function (idx) {
        return this.board.get(this.colIdx, idx);
    };
    return VCDown;
})();

var VCLeft = (function () {
    function VCLeft(board, colIdx) {
        this.board = board;
        this.colIdx = colIdx;
    }
    VCLeft.prototype.set = function (idx, value) {
        this.board.set(idx, this.colIdx, value);
    };

    VCLeft.prototype.get = function (idx) {
        return this.board.get(idx, this.colIdx);
    };
    return VCLeft;
})();

var VCUp = (function () {
    function VCUp(board, colIdx) {
        this.board = board;
        this.colIdx = colIdx;
    }
    VCUp.prototype.set = function (idx, value) {
        this.board.set(this.colIdx, 3 - idx, value);
    };

    VCUp.prototype.get = function (idx) {
        return this.board.get(this.colIdx, 3 - idx);
    };
    return VCUp;
})();

var VCRight = (function () {
    function VCRight(board, colIdx) {
        this.board = board;
        this.colIdx = colIdx;
    }
    VCRight.prototype.set = function (idx, value) {
        this.board.set(3 - idx, this.colIdx, value);
    };

    VCRight.prototype.get = function (idx) {
        return this.board.get(3 - idx, this.colIdx);
    };
    return VCRight;
})();
