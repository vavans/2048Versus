
var PlayerMove = (function () {
    function PlayerMove(way) {
        if (typeof way === "string") {
            switch (way) {
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
        } else {
            this.way = way;
        }
    }
    PlayerMove.prototype.apply = function (game) {
        game.playerMove(this.way);
    };

    PlayerMove.prototype.isValid = function () {
        return 0 <= this.way && this.way <= 4;
    };
    return PlayerMove;
})();

var BoardMove = (function () {
    function BoardMove(x, value) {
        this.x = x;
        this.value = value;
    }
    BoardMove.prototype.apply = function (game) {
        game.boardMove(this.x, this.value);
    };

    BoardMove.prototype.isValid = function () {
        return this.x > -1;
    };
    return BoardMove;
})();
