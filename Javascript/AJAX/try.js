const { set } = require("mongoose");

function getData(name) {
    return new Promise((resolve, reject) =>{
        if(name == "Danny"){
            setTimeout(() => {
                resolve({name: name, age: Math.floor(Math.random() * 20), major: "CS"});
            }, 1000);
        }
        else{
            reject(new Error("I don't know who you are"));
        }
    });
};

function getMovie(data) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(data.age > 10){
                resolve({movie: "Harry Potter"})
            }
            else if(data.age > 5){
                resolve({movie: "Frozen"})
            }
            else{
                reject(new Error("Your age is too young"));
            }
        }, 1000);
    })
}
function getMoiveDetail(data){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(data.movie == "Harry Potter"){
                resolve({time: "5pm - 7pm"});
            }
            else if(data.movie == "Frozen"){
                resolve({time: "7pm - 9pm"});
            }
            else{
                reject(new Error("Invalid movie"));
            }
        }, 1000);
    });
}
async function showAll(){
    try{
        const data = await getData("Danny");
        const movie = await getMovie(data);
        const movieDetail = await getMoiveDetail(movie);
        console.log(data);
        console.log(movie);
        console.log(movieDetail);
    }catch(err){
        console.log("Error");
    }
}
showAll();