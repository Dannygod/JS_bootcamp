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

getData("Danny")
.then((data) => {
    console.log(data);
    return getMovie(data);
})
.then((obj) =>{
    console.log(obj);
    return getMoiveDetail(obj);
})
.then((obj) =>{
    console.log(obj);
})
.catch((e) =>{
    console.log(e);
});