let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  e.preventDefault();
  button.style.background("purple");
  console.log("button");
});
