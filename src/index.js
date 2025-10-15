import "./styles/global.css";
import renderHome from "./pages/home.js";

function clearContent() {
  const content = document.getElementById("content");
  content.innerHTML = "";
}

document.getElementById("home").addEventListener("click", () => {
  clearContent();
  renderHome();
});

renderHome();
