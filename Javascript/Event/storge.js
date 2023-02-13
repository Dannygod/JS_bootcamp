localStorage.setItem("name", "Danny");
localStorage.setItem("age", "18");

let myFriends = ["Terry", "May", "Zoe"];
localStorage.setItem("friend", myFriends);

let myName = localStorage.getItem("name");
console.log(myName);

console.log(typeof myFriends);
console.log(typeof localStorage.friend);
