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
    clearAllErrors();
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
    var displayDiv = $("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    displayDiv.appendChild(gameHeading);
    var onlineText = "";
    if (myGame.isOnline) {
        onlineText = "is an online game.";
    }
    else {
        onlineText = "is a singleplayer game.";
    }
    var gameInfo = document.createElement("p");
    gameInfo.innerText = myGame.title + " has a ESRB rating of " + myGame.rating + ". It cost $" + myGame.price.toFixed(2) + ", and it " + onlineText;
    displayDiv.appendChild(gameInfo);
}
function isAllDataValid() {
    var boolFlag = true;
    var title = getInputElem("gameTitle").value;
    if (title == "") {
        boolFlag = false;
        addErrorMessage("Title is required");
    }
    var price = getInputElem("gamePrice").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue) || priceValue < 0) {
        boolFlag = false;
        addErrorMessage("Price needs to be a number and greater than 0");
    }
    var rating = $("gameRating").value;
    if (rating == "") {
        boolFlag = false;
        addErrorMessage("You need to choose a rating!");
    }
    return boolFlag;
}
function addErrorMessage(errorMessage) {
    var errorSummary = getInputElem("validationSummary");
    var errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}
function $(id) {
    return document.getElementById(id);
}
function getInputElem(id) {
    return $(id);
}
function clearAllErrors() {
    $("validationSummary").innerText = "";
}
