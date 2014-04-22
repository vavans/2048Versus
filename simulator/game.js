var Game = (function () {
    //private board : Board;
    function Game(board) {
        if (typeof board === "undefined") { board = new Board(); }
        this.board = board;
    }
    Game.prototype.generateBoardMove = function () {
        var value = Game.tilesProba[Math.floor(Math.random() * 10)];
        return new BoardMove(this.board.getFirstEmptyCell(), value);
    };

    Game.prototype.isOver = function () {
        return false;
    };

    Game.prototype.getScore = function () {
        return this.board.score;
    };

    Game.prototype.playerMove = function (way) {
        for (var i = 0; i < 4; i++) {
            var vcCol = this.board.getCol(way, i);
            this.moveColumn(vcCol);
        }
    };

    Game.prototype.boardMove = function (tile, value) {
        if (this.board.get1d[tile] == null) {
            this.board.set1d[tile] = value;
        }
    };

    Game.prototype.clone = function () {
        return new Game(this.board.clone());
    };

    Game.prototype.canGoDeeper = function (c, idx, value, min_y) {
        return (idx >= min_y && (c.get(idx) === 0 || (c.get(idx) === value)));
    };

    Game.prototype.moveColumn = function (vc) {
        var miny = 0;
        for (var y = 1; y < 4; y++) {
            var v = vc.get(y);
            if (v === 0)
                continue;
            vc.set(y, 0);

            var ny = y - 1;

            var destination = y;

            while (this.canGoDeeper(vc, ny, v, miny)) {
                destination = ny;
                if (vc.get(ny) === v) {
                    vc.set(ny, 0);
                    v *= 2;
                    this.board.score += v;
                    miny = ny + 1;
                }
                ny--;
            }
            vc.set(destination, v);
        }
    };
    Game.tilesProba = new Array(2, 2, 2, 2, 2, 2, 4, 4, 4, 4);
    return Game;
})();
