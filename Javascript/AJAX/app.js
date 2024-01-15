function getData(name, callback) {
    return setTimeout(() =>{
        callback({name: name, age: Math.random() * 20, major: "CS"});
    }, 1000);
};

function getMovie(data, callback) {
    if (data.age > 10) {
        return setTimeout(() => {
            callback("Harry Potter");
        }, 1000);
    } else if(data.age > 5) {
        return setTimeout(() => {
            callback("Frozen");
        }, 1000);
    } else {
        return setTimeout(() => {
            callback("Toy Story");
        }, 1000);
    }
}
function getMoiveDetail(movieType, callback){
    if (movieType == "Harry Potter"){
        return setTimeout(() => {
            callback("5am - 7am");
        }, 1000);
    }
    else if (movieType == "Frozen"){
        return setTimeout(() => {
            callback("7am - 9am");
        }, 1000);
    }
    else if (movieType == "Toy Story"){
        return setTimeout(() => {
            callback("9am - 11am");
        }, 1000);
    }
    else {
        return setTimeout(() => {
            callback("No movie");
        }, 1000);
    }
}
getData("Danny", (data) => {
    console.log(data);
    getMovie(data, (movie) => {
        console.log(movie);
        getMoiveDetail(movie, (detail) => {
            console.log(detail);
        });
    });
});