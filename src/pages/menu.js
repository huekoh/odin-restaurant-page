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
  const image = document.createElement("img");
  image.src = "./assets/img/menu_kimchi_stew.jpg";
  imgContainerOne.appendChild(image);

  const textOne = document.createElement("div");
  textOne.classList.add("text-container");
  textOne.innerHTML = `
    <h1>KIMCHI STEW</h1>
    <p></p>
    <p>Perfect for a rainy day. Munchday's kimchi stew is piping hot, and loaded with a rich pork and kimchi broth.</p> 
    <p>Ingredients may very from session to session depending on what's available in the fridge. But you can expect to have spam, eggs and pork belly for sure!</p>
    <p></p>
    <p><b>Caution: Can be quite spicy<b></p>
  `;

  cardOne.append(imgContainerOne, textOne);

  // create second food card of this flex row
  const cardTwo = document.createElement("div");
  cardTwo.classList.add("food-card-small");

  const imgContainerTwo = document.createElement("div");
  imgContainerTwo.classList.add("img-container");
  const imgBreakfast = document.createElement("img");
  imgBreakfast.src = "./assets/img/menu_breakfast.jpg";
  imgContainerTwo.appendChild(imgBreakfast);

  const textTwo = document.createElement("div");
  textTwo.classList.add("text-container");
  textTwo.innerHTML = `
    <h1>BREAKFAST SET</h1>
    <p>Breakfast in undoubtedly the most important meal of the day. So why not have it for lunch too?</p>
  `;

  cardTwo.append(imgContainerTwo, textTwo);

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
  const image = document.createElement("img");
  image.src = "./assets/img/menu_tacos.jpg";
  imgContainerOne.appendChild(image);

  const textOne = document.createElement("div");
  textOne.classList.add("text-container", "long");
  textOne.innerHTML = `
    <h1>FISH TACOS</h1>
    <p>Hand-made soft-shell tortillas, topped with a slap of greek yoghurt, beer-battered fish and a sweet-sour pico de gallo to pair. What more could you want to pack into a single bite of flavour heaven.</p>
  `;

  cardOne.append(imgContainerOne, textOne);

  // create second food card of this flex row
  const cardTwo = document.createElement("div");
  cardTwo.classList.add("food-card-small");

  const imgContainerTwo = document.createElement("div");
  imgContainerTwo.classList.add("img-container");
  const imgBreakfast = document.createElement("img");
  imgBreakfast.src = "./assets/img/menu_chicken_rice.jpg";
  imgContainerTwo.appendChild(imgBreakfast);

  const textTwo = document.createElement("div");
  textTwo.classList.add("text-container");
  textTwo.innerHTML = `
    <h1>CHICKEN RICE</h1>
    <p>Chicken rice is so unassuming but packed with such flavour. The best part of it isn't even the chicken, it's the rice infused with aromatics including garlic, ginger, scallion...</p>
  `;

  cardTwo.append(imgContainerTwo, textTwo);

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
  const image = document.createElement("img");
  image.src = "./assets/img/menu_salsa.jpg";
  imgContainerOne.appendChild(image);

  const textOne = document.createElement("div");
  textOne.classList.add("text-container");
  textOne.innerHTML = `
    <h1>SALSA</h1>
    <p>Our salsa always comes with a good portion of diced tomatoes, onions, a fruit (usually mango). Olive oil is generously added, and the mixture is tossed with cilantro, lime juice, oregano and cumin.</p>
    <p>Unfortunately it's hard to find jalopeños at our local grocery stores, or it'll definitely be added.</p>
  `;

  cardOne.append(imgContainerOne, textOne);

  // create second food card of this flex row
  const cardTwo = document.createElement("div");
  cardTwo.classList.add("food-card-small");

  const imgContainerTwo = document.createElement("div");
  imgContainerTwo.classList.add("img-container");
  const imgBreakfast = document.createElement("img");
  imgBreakfast.src = "./assets/img/menu_mac_and_cheese.jpg";
  imgContainerTwo.appendChild(imgBreakfast);

  const textTwo = document.createElement("div");
  textTwo.classList.add("text-container");
  textTwo.innerHTML = `
    <h1>MAC & CHEESE</h1>
    <p>Do we really need to explain why this is a good dish to choose any day? Unless you're lactose intolerant, don't deprive yourself of this rich, creamy goodness.</p>
  `;

  cardTwo.append(imgContainerTwo, textTwo);

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
  const image = document.createElement("img");
  image.src = "./assets/img/menu_squash_soup.jpg";
  imgContainerOne.appendChild(image);

  const textOne = document.createElement("div");
  textOne.classList.add("text-container");
  textOne.innerHTML = `
    <h1>BUTTERNUT SQUASH SOUP</h1>
    <p>Oven-baked butternut squash, onions, tomatoes and garlic. Blended with cottage cheese to form a thick and rich soup. Amazing as a sourdough dip!</p>
    <p>Whipping cream art for presentation is a cute bonus. You'll get that here a lot at Munchday Co.</p>
  `;

  cardOne.append(imgContainerOne, textOne);

  // create second food card of this flex row
  const cardTwo = document.createElement("div");
  cardTwo.classList.add("food-card-small");

  const imgContainerTwo = document.createElement("div");
  imgContainerTwo.classList.add("img-container");
  const imgBreakfast = document.createElement("img");
  imgBreakfast.src = "./assets/img/menu_salmon.jpg";
  imgContainerTwo.appendChild(imgBreakfast);

  const textTwo = document.createElement("div");
  textTwo.classList.add("text-container");
  textTwo.innerHTML = `
    <h1>GRILLED SALMON</h1>
    <p>Seasoned salmon cooked in olive oil, placed over a bed of cooked spinach, and paired with a lemon cream dill sauce. It's alright, not too bad.</p>
  `;

  cardTwo.append(imgContainerTwo, textTwo);

  // append food cards to row div
  flexRow.append(cardTwo, cardOne);
  return flexRow;
}
