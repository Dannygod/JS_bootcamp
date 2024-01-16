async function getJoke(){
    let data = await fetch('https://v2.jokeapi.dev/joke/Any');
    let parsedData = await data.json();
    let jokeContent = document.querySelector("#joke");
    console.log(parsedData);
    if (parsedData.type === "single"){
        jokeContent.innerHTML = `${parsedData.joke}`;
        // console.log(parsedData.joke);
    }
    else if (parsedData.type === "twopart"){
        jokeContent.innerHTML = `${parsedData.setup} ${"<br> .".repeat(15)} ${"<br>"} ${parsedData.delivery}`;
        // console.log(parsedData.setup);
        // console.log(parsedData.delivery);
    }
}
getJoke();