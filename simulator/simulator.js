var Simulator = (function () {
    function Simulator(ia1, ia2) {
        this.ia1 = ia1;
        this.ia2 = ia2;
        this.debug = false;
    }
    Simulator.prototype.figth = function () {
        var game1 = new Game();
        var game2 = new Game();

        var h1 = new GameHistory(game1);
        var h2 = new GameHistory(game2);

        this.ia1.start(game1);
        this.ia2.start(game2);

        while (!game1.isOver()) {
            //get the player ia1 move
            var moveNum = this.ia1.getMove(game1);
            var move = new PlayerMove(moveNum);
            move.apply(game1);
            h1.addMove(move);

            //get the board move (aka : the tile spawn)
            var boardMove = game1.generateBoardMove();
            boardMove.apply(game1);
            h1.addMove(boardMove);
        }

        while (!game2.isOver()) {
            //get the player ia2 move
            var moveNum = this.ia2.getMove(game2);
            var move = new PlayerMove(moveNum);
            move.apply(game2);
            h2.addMove(move);

            //get the board move (aka : the tile spawn)
            var boardMove = game2.generateBoardMove();
            boardMove.apply(game2);
            h2.addMove(boardMove);
        }
    };
    return Simulator;
})();
