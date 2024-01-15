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
        if(data.age > 10){
            setTimeout(() => {
                resolve({movie: "Harry Potter"})
            }, 1000);
        }
        else if(data.age > 5){
            setTimeout(() => {
                resolve({movie: "Frozen"})
            }, 1000);
        }
        else{
            reject(new Error("Your age is too young"));
        }
    })
}
function getMoiveDetail(data){
    return new Promise((resolve, reject) =>{
        if (data.movie == "Harry Potter"){
            setTimeout(() => {
                resolve({time: "5pm - 7pm"})
            }, 1000);
        }
        else if(data.movie == "Frozen"){
            setTimeout(() => {
                resolve({time: "7pm - 9pm"})
            }, 1000);
        }
        else{
            reject(new Error("Invalid movie"));
        }
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