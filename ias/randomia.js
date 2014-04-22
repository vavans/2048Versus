var RandomIA = (function () {
    function RandomIA() {
    }
    RandomIA.prototype.start = function (game) {
    };

    RandomIA.prototype.getMove = function (game) {
        var way = Math.floor(Math.random() * 4);
        return way;
    };
    return RandomIA;
})();
