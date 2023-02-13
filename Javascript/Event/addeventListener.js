let button = document.querySelector("button.sub");

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.style.background = "purple";
  button.style = "background-color: purple;  color: white;";
  // inline > id > class
  console.log(button.style);
});
