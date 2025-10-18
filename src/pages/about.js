import "../styles/about.css";

export default function renderAbout() {
  const content = document.getElementById("content");
  content.className = "";
  content.classList.add("about");
  content.style.backgroundColor = "var(--about-color)";

  const aboutCard = document.createElement("div");
  aboutCard.classList.add("about-card");
  aboutCard.innerHTML = `
    <h1>MORE ABOUT US</h1>
    <br>
    <p><em>"Taste and see that the LORD is good. Blessed is the man who takes refuge in Him" - Pslam 34:8</em></p>
    <br>
    <p>We have been given the gift of taste, paired alongside with many delicious foods and recipes to experience! We thank God for these blessings in life, that we may enjoy with one another as we fellowship and break bread.</p>
    <br>
    <p>Munchday Co is looking to expand its cookouts to help the less fortunate in the future. If you are someone who is keen to serve the needy and join our mission, feel free to contact us at XXXX-XXXX! A willing heart is the only pre-requisite. </p>
  `;

  content.append(aboutCard);
}
