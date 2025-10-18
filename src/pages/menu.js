import "../styles/menu.css";

export default function renderMenu() {
  const content = document.getElementById("content");
  content.className = "";
  content.classList.add("menu");
  content.style.backgroundColor = "var(--menu-color)";

  // main div with grid display to contain menu
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");

  // each row in grid is a flex container
  const rowOne = createRowOne();
  const rowTwo = createRowTwo();
  const rowThree = createRowThree();
  const rowFour = createRowFour();

  gridContainer.append(rowOne, rowTwo, rowThree, rowFour);
  content.append(gridContainer);
}

function createRowOne() {
  const flexRow = document.createElement("div");
  flexRow.classList.add("flex-row");

  // create first food card of this flex row
  const cardOne = document.createElement("div");
  cardOne.classList.add("food-card-big");

  const imgContainerOne = document.createElement("div");
  imgContainerOne.classList.add("img-container");
  const imgKimchi = document.createElement("img");
  imgKimchi.src = "./assets/img/menu_kimchi_stew.jpg";
  imgContainerOne.appendChild(imgKimchi);

  cardOne.append(imgContainerOne);

  // create second food card of this flex row
  const cardTwo = document.createElement("div");
  cardTwo.classList.add("food-card-small");

  const imgContainerTwo = document.createElement("div");
  imgContainerTwo.classList.add("img-container");
  const imgBreakfast = document.createElement("img");
  imgBreakfast.src = "./assets/img/menu_breakfast.jpg";
  imgContainerTwo.appendChild(imgBreakfast);

  cardTwo.append(imgContainerTwo);

  // append food cards to row div
  flexRow.append(cardOne, cardTwo);
  return flexRow;
}

function createRowTwo() {
  const flexRow = document.createElement("div");
  flexRow.classList.add("flex-row");

  // create first food card of this flex row
  const cardOne = document.createElement("div");
  cardOne.classList.add("food-card-big", "long");

  const imgContainerOne = document.createElement("div");
  imgContainerOne.classList.add("img-container", "long");
  const imgKimchi = document.createElement("img");
  imgKimchi.src = "./assets/img/menu_tacos.jpg";
  imgContainerOne.appendChild(imgKimchi);

  cardOne.append(imgContainerOne);

  // create second food card of this flex row
  const cardTwo = document.createElement("div");
  cardTwo.classList.add("food-card-small");

  const imgContainerTwo = document.createElement("div");
  imgContainerTwo.classList.add("img-container");
  const imgBreakfast = document.createElement("img");
  imgBreakfast.src = "./assets/img/menu_chicken_rice.jpg";
  imgContainerTwo.appendChild(imgBreakfast);

  cardTwo.append(imgContainerTwo);

  // append food cards to row div
  flexRow.append(cardTwo, cardOne);
  return flexRow;
}

function createRowThree() {
  const flexRow = document.createElement("div");
  flexRow.classList.add("flex-row");

  // create first food card of this flex row
  const cardOne = document.createElement("div");
  cardOne.classList.add("food-card-big");

  const imgContainerOne = document.createElement("div");
  imgContainerOne.classList.add("img-container");
  const imgKimchi = document.createElement("img");
  imgKimchi.src = "./assets/img/menu_salsa.jpg";
  imgContainerOne.appendChild(imgKimchi);

  cardOne.append(imgContainerOne);

  // create second food card of this flex row
  const cardTwo = document.createElement("div");
  cardTwo.classList.add("food-card-small");

  const imgContainerTwo = document.createElement("div");
  imgContainerTwo.classList.add("img-container");
  const imgBreakfast = document.createElement("img");
  imgBreakfast.src = "./assets/img/menu_mac_and_cheese.jpg";
  imgContainerTwo.appendChild(imgBreakfast);

  cardTwo.append(imgContainerTwo);

  // append food cards to row div
  flexRow.append(cardOne, cardTwo);
  return flexRow;
}

function createRowFour() {
  const flexRow = document.createElement("div");
  flexRow.classList.add("flex-row");

  // create first food card of this flex row
  const cardOne = document.createElement("div");
  cardOne.classList.add("food-card-big");

  const imgContainerOne = document.createElement("div");
  imgContainerOne.classList.add("img-container");
  const imgKimchi = document.createElement("img");
  imgKimchi.src = "./assets/img/menu_squash_soup.jpg";
  imgContainerOne.appendChild(imgKimchi);

  cardOne.append(imgContainerOne);

  // create second food card of this flex row
  const cardTwo = document.createElement("div");
  cardTwo.classList.add("food-card-small");

  const imgContainerTwo = document.createElement("div");
  imgContainerTwo.classList.add("img-container");
  const imgBreakfast = document.createElement("img");
  imgBreakfast.src = "./assets/img/menu_salmon.jpg";
  imgContainerTwo.appendChild(imgBreakfast);

  cardTwo.append(imgContainerTwo);

  // append food cards to row div
  flexRow.append(cardTwo, cardOne);
  return flexRow;
}
