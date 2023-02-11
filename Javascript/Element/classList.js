let myP = document.querySelector("p");

console.log(myP.classList.contains("blue")); //false

myP.classList.add("red");
myP.classList.remove("red");
myP.classList.toggle("blue");
myP.classList.toggle("bold");

console.log(myP.classList.contains("blue")); //false
