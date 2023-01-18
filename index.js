const cardArray = [
  {
    name: "Pizza",
    imgSrc: "./img/pizza.png",
  },
  {
    name: "Hotdog",
    imgSrc: "./img/hot-dog.png",
  },
  {
    name: "Burger",
    imgSrc: "./img/burger.png",
  },
  {
    name: "French fries",
    imgSrc: "./img/french-fries.png",
  },
  {
    name: "Ice cream",
    imgSrc: "./img/ice-cream.png",
  },
  {
    name: "Kabab",
    imgSrc: "./img/kebab.png",
  },
  {
    name: "pancakes",
    imgSrc: "./img/pancakes.png",
  },
  {
    name: "Popcorn",
    imgSrc: "./img/popcorn.png",
  },
  {
    name: "Sandwich",
    imgSrc: "./img/sandwich.png",
  },
];

const imgContainer = document.getElementById("img-container");

// ! For random items
cardArray.sort(() => 0.5 - Math.random());
cardArray.forEach((card, i) => {
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", "img/guess-what.png");
  cardImg.setAttribute("data-id", i);
  imgContainer.appendChild(cardImg);
});
