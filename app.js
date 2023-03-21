let bodyBackground = document.body;
let headerBackground = document.getElementById("header");
let colorButton = document.getElementById("change-color");

const randomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const changeColor = () => {
  bodyBackground.style.setProperty("--gradient-color", randomColor());
};

colorButton.onclick = changeColor;
