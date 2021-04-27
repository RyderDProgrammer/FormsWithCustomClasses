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
    console.log("I was called!");

    if(isAllDataValid())
    {
        let game = getVideoGame();
        displayGame(game);
    }
}

function getVideoGame():VideoGame
{
    //TODO: Create game, populate with data from form
    // finally return that game
    let theGame = new VideoGame();
    return theGame;
}

function displayGame(myGame:VideoGame):void
{
    //TODO: Display video game below the form.
}

//TODO: Add validation code.
function isAllDataValid()
{
    return true;
}