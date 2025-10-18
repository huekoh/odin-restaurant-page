import "../styles/about.css";

export default function renderAbout() {
  const content = document.getElementById("content");
  content.className = "";
  content.classList.add("about");
  content.style.backgroundColor = "var(--about-color)";
}
