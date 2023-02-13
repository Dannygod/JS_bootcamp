localStorage.setItem("name", "Danny");
localStorage.setItem("age", "18");
// array
let myFriends = ["Terry", "May", "Zoe"];
localStorage.setItem("friend", JSON.stringify(myFriends));
let getFriend = JSON.parse(localStorage.getItem("friend"));

// object
let myObject = {
  name: "Danny",
  age: 16,
};

localStorage.setItem("Object", JSON.stringify(myObject));
let getObject = JSON.parse(localStorage.getItem("Object"));

console.log(myObject);
console.log(getObject);

console.log(getFriend);
