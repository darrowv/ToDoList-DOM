//Решил сделать фичу со сменой тем
//Для этого создал в html три кнопки, нажатие на которые будет менять нашу тему

const redTheme = document.getElementById("red-theme");
const darkTheme = document.getElementById("dark-theme");
const defaultTheme = document.getElementById("default");
const mainHeader = document.getElementById("main-header");
const content = document.getElementById("content");

//Переключение на красную тему

redTheme.addEventListener("click", () => {
  document.body.style.backgroundImage = 'url("./img/red.png")';
  mainHeader.style.color = "#c6ff87";
  content.style.backgroundColor = "rgb(226 157 157 / 81%)";
  content.style.border = "4px solid rgb(0 0 0 / 48%)";

  content.addEventListener("mouseover", () => {
    content.style.backgroundColor = "rgb(126 226 208 / 78%)";
    content.style.border = "4px solid #2d2d2d";
  });
  content.addEventListener("mouseout", () => {
    content.style.backgroundColor = "rgb(226 157 157 / 81%)";
    content.style.border = "4px solid rgb(0 0 0 / 48%)";
  });
});

//Переключение на темную тему

darkTheme.addEventListener("click", () => {
  document.body.style.backgroundImage = 'url("./img/dark.png")';
  mainHeader.style.color = "white";
  content.style.backgroundColor = "rgb(132 195 224 / 84%)";
  content.style.border = "4px solid rgb(115 144 0)";

  content.addEventListener("mouseover", () => {
    content.style.backgroundColor = "#93a5b6e0";
    content.style.border = "4px solid rgb(146 182 2)";
  });
  content.addEventListener("mouseout", () => {
    content.style.backgroundColor = "rgb(132 195 224 / 84%)";
    content.style.border = "4px solid rgb(115 144 0)";
  });
});

//Переключение на дефолтную тему

defaultTheme.addEventListener("click", () => {
  document.body.style.backgroundImage = 'url("./img/default.png")';
  mainHeader.style.color = "black";
  content.style.backgroundColor = "#ecfff9ad";
  content.style.border = "4px solid rgb(147, 183, 207)";

  content.addEventListener("mouseover", () => {
    content.style.backgroundColor = "rgb(255, 255, 255)";
    content.style.border = "4px solid rgb(111, 162, 228)";
  });
  content.addEventListener("mouseout", () => {
    content.style.backgroundColor = "#ecfff9ad";
    content.style.border = "4px solid rgb(147, 183, 207)";
  });
});
