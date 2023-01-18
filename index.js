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
const result = document.getElementById("result");
const btn = document.getElementById("btn");
let cardChosen = [];
let cardChosenIds = [];
let cardsWon = [];
// ! For random items
cardArray.sort(() => 0.5 - Math.random());

cardArray.forEach((card, i) => {
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", "img/guess-what.png");
  cardImg.setAttribute("data-id", i);
  cardImg.addEventListener("click", flipCard);
  imgContainer.appendChild(cardImg);
});

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].imgSrc);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardChosenIds[0];
  const optionTwoIds = cardChosenIds[1];
  if (optionOneId == optionTwoIds) {
    cards[optionOneId].setAttribute("src", "./img/guess-what.png");
    cards[optionTwoIds].setAttribute("src", "./img/guess-what.png");
    alert("You have clicked same card😬!");
  }
  if (cardChosen[0] === cardChosen[1]) {
    alert("You found match😃!");
    cards[optionOneId].setAttribute("src", "./img/well-done.png");
    cards[optionTwoIds].setAttribute("src", "./img/well-done.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoIds].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute("src", "./img/guess-what.png");
    cards[optionTwoIds].setAttribute("src", "./img/guess-what.png");
    alert("Sorry😕!! Try Again");
  }
  result.textContent = cardsWon.length;
  cardChosen = [];
  cardChosenIds = [];
  if (cardsWon.length === cardArray.length / 2) {
    result.textContent = "Congrtulation🤩!! you found them all !";
  }
}
btn.addEventListener("click", () => {
  location.reload();
});
