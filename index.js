let jokeDisplayElement = document.querySelector(".joke");
let getJokeButton = document.querySelector(".get-Joke");

async function getJokeApi(){
    var rawJokeData = await fetch("https://v2.jokeapi.dev/joke/Any?type=single");
    let jsonJokeData = await rawJokeData.json();
    console.log(jsonJokeData.joke)
    jokeDisplayElement.textContent = jsonJokeData.joke;
}

function buttonIsClicked(){
    console.log("button is clicked")
}
getJokeButton.addEventListener("click", getJokeApi);
