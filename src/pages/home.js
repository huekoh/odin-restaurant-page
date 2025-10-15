import "../styles/home.css";

export default function renderHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const colOne = createColumnOne();
  const colTwo = createColumnTwo();
  const colThree = createColumnThree();

  content.append(colOne, colTwo, colThree);
}

function createColumnOne() {
  const colContainer = document.createElement("div");
  colContainer.classList.add("flex-container");

  // create video componenet of this content column
  const vidDiv = document.createElement("div");
  vidDiv.classList.add("video-a");

  const video = document.createElement("video");
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.textContent = "Your browser does not support the video tag.";

  const source = document.createElement("source");
  source.src = "./assets/video/home_huiling.mp4";
  source.type = "video/mp4";
  video.append(source);

  vidDiv.append(video);

  // create text component of this content column
  const textDiv = document.createElement("div");
  textDiv.classList.add("text-a");
  textDiv.innerHTML = `
    <h5>UPCOMING COOKOUTS</h5>
    <br />
    <p>13 OCTOBER 2025, 12PM</p>
    <p>24 NOVEMBER 2025, 1PM</p>
    <p>08 DECEMBER 2025, 1PM</p>
  `;

  colContainer.append(vidDiv, textDiv);
  return colContainer;
}

function createColumnTwo() {
  const colContainer = document.createElement("div");
  colContainer.classList.add("flex-container");

  // create first image and its container
  const imgDivOne = document.createElement("div");
  imgDivOne.classList.add("img-a");
  const imgOne = document.createElement("img");
  imgOne.src = "./assets/img/home_food_spread.jpg";
  imgDivOne.append(imgOne);

  // create second image and its container
  const imgDivTwo = document.createElement("div");
  imgDivTwo.classList.add("img-b");
  const imgTwo = document.createElement("img");
  imgTwo.src = "./assets/img/home_friends.jpg";
  imgDivTwo.append(imgTwo);

  colContainer.append(imgDivOne, imgDivTwo);
  return colContainer;
}

function createColumnThree() {
  const colContainer = document.createElement("div");
  colContainer.classList.add("flex-container");

  // create text component of this content column
  const textDiv = document.createElement("div");
  textDiv.classList.add("text-b");
  textDiv.innerHTML = `
    <p>
      Munchday Co is a home-based lunch club, started by a bunch of
      fun-employed friends in their early twenties bonding over their love
      for Jesus, food, bakes and matcha!
    </p>
    <br />
    <p>
      All our welcome to join our monthly cookouts and post-lunch runs to
      burn off the calories from eating a lil too much brownies.
    </p>
  `;

  // create video componenet of this content column
  const vidDiv = document.createElement("div");
  vidDiv.classList.add("video-b");

  const video = document.createElement("video");
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.textContent = "Your browser does not support the video tag.";

  const source = document.createElement("source");
  source.src = "./assets/video/home_veg_oven.mp4";
  source.type = "video/mp4";
  video.append(source);

  vidDiv.append(video);

  colContainer.append(textDiv, vidDiv);
  return colContainer;
}
