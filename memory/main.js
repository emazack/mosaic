const mainContainer = document.querySelector(".cards-container");

// Source code: https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }  
  return array;
}

const generateCards = (container, cards) => {
  for (let index = 0; index < cards.length; index++) {
    let color = cards[index];
    let newCard = document.createElement("div");
    newCard.className = "card hidden";
    newCard.setAttribute("data-color", color);
    newCard.innerHTML = 
    `
    <div class="front" style="background-color: ${color};"></div>
    <div class="back"></div>
    `
    container.appendChild(newCard);
  }
}

const resetCards = (cards) => {
  cards.forEach(card => {
    if (card.classList.contains('selected')) {
      card.classList.remove('selected');
      card.classList.add('hidden');
    }
  });
}

const setScore = (scoredColor, cards) => {
  cards.forEach(card => {
    if (card.getAttribute("data-color") === scoredColor) {
      card.classList.remove("hidden");
      card.classList.remove("selected");
      card.classList.add("scored");
    }
  });
}

const clickingCards = () => {
  const cardsList = document.querySelectorAll(".card");
  const overlay = document.querySelector(".overlay");
  var cardsSelected = [];
  
  cardsList.forEach(card => {
    card.addEventListener("click", () => {
      if ( !(card.classList.contains('scored')) ) {
        card.classList.toggle("hidden");
        card.classList.toggle("selected");
        cardsSelected = document.querySelectorAll(".card.selected");
        if (cardsSelected.length === 2) {
          if (cardsSelected[0].getAttribute("data-color") === cardsSelected[1].getAttribute("data-color")) {
            setScore(cardsSelected[0].getAttribute("data-color"), cardsList);
            cardsSelected = [];
          } else {
            overlay.style.zIndex = 3;
            setTimeout(() => {              
             resetCards(cardsList);
             overlay.style.zIndex = -1;
            }, 1000);
            cardsSelected = [];
          }
        }
      }
    })
  });
}

const initGame = (quantity) => {
  const colors = ["green", "red", "black", "grey", "pink", "blue", "orange", "purple", "yellow", "cyan"];
  if ((quantity % 2 === 0) && (quantity <= colors.length)) {
    const picks = [];
    for (let index = 0; index < quantity; index++) {
      var numberPick = Math.floor(Math.random() * colors.length);
      picks.push(colors[numberPick]);
      picks.push(colors[numberPick]);
      colors.splice(numberPick, 1);
    }
    shuffleArray(picks);
    generateCards(mainContainer, picks);
    clickingCards();
  } else {
    alert(`You need an even number and maximum ${colors.length} cards to play`);
  }
}

// Start game with 8 cards
initGame(8);