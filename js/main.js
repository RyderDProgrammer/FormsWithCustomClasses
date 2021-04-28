var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addButton = document.querySelector("input[type=button]");
    addButton.onclick = addVideoGame;
};
function addVideoGame() {
    console.log("Add Video Game pushed!");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function getVideoGame() {
    var game = new VideoGame();
    var inputTitle = $("gameTitle");
    game.title = inputTitle.value;
    var priceInput = $("gamePrice");
    game.price = parseFloat(priceInput.value);
    var ratingInput = $("gameRating");
    game.rating = ratingInput.value;
    var onlineInput = $("onlineOnly");
    game.isOnline = onlineInput.checked;
    console.log(game);
    return game;
}
function displayGame(myGame) {
}
function isAllDataValid() {
    return true;
}
function $(id) {
    return document.getElementById(id);
}
