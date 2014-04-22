var GameHistory = (function () {
    function GameHistory(startingGame) {
        this.startingGame = startingGame.clone();
        this.moves = [];
    }
    GameHistory.prototype.addMove = function (move) {
        this.moves.push(move);
    };
    return GameHistory;
})();
