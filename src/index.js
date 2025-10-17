import "./styles/global.css";
import renderHome from "./pages/home.js";
import renderMenu from "./pages/menu.js";
import renderAbout from "./pages/about.js";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

document.getElementById("home").addEventListener("click", () => {
  clearContent();
  renderHome();
});

document.getElementById("menu").addEventListener("click", () => {
  clearContent();
  renderMenu();
});

document.getElementById("about").addEventListener("click", () => {
  clearContent();
  renderAbout();
});

renderHome();
