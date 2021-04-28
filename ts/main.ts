class VideoGame
{
    title:string;
    price:number;
    rating:string;
    isOnline:boolean;
}

//Test code
// let myGame = new VideoGame();
// myGame.title = "Mario";
// myGame.price = 9.99;
// myGame.rating = "M";
// myGame.isOnline = false;

window.onload = function()
{
    let addButton = <HTMLElement>document.querySelector("input[type=button]");
    addButton.onclick = addVideoGame;
}

function addVideoGame()
{
    console.log("Add Video Game pushed!");

    if(isAllDataValid())
    {
        let game = getVideoGame();
        displayGame(game);
    }
}

/**
 * Gets all game data from the form and returns it 
 * as a video game object.
 * @returns The full game and all of its content the title,
 * the price, the rating and whether or not it is an online
 * product
 */
function getVideoGame():VideoGame
{
    let game = new VideoGame();
    let inputTitle = <HTMLInputElement>$("gameTitle");
    game.title = inputTitle.value;

    let priceInput = <HTMLInputElement>$("gamePrice");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>$("gameRating");
    game.rating = ratingInput.value;

    let onlineInput = <HTMLInputElement>$("onlineOnly");
    game.isOnline = onlineInput.checked; // easier than the if else statement
    
    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void
{
    let displayDiv = $("display");

    //Creates an H2 element then puts the games title in that
    //element and displays it.
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    displayDiv.appendChild(gameHeading);

    let onlineText = "";
    //making an online only variable
    if(myGame.isOnline)
    {
        onlineText = "is an online game."
    }
    else
    {
        onlineText = "is a singleplayer game."
    }

    //creating the paragraph
    let gameInfo = document.createElement("p");
    // gameInfo.innerText = myGame.title + " has a ESRB rating of "
    // + myGame.rating + ". It cost $" + myGame.price + ", and it " + onlineText;
    // displayDiv.appendChild(gameInfo);
    //Using a template literal
    gameInfo.innerText = `${myGame.title} has a ESRB rating of ${myGame.rating}. It cost $${myGame.price.toFixed(2)}, and it ${onlineText}`;
    displayDiv.appendChild(gameInfo);
}

//TODO: Add validation code.
function isAllDataValid()
{
    return true;
}

function $(id:string)
{
    return document.getElementById(id);
}