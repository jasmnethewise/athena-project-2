let cards = document.querySelectorAll(".card");
let flippedCards = [];
let successSound = document.getElementById("success-sound");

cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains("flipped") || flippedCards.length === 2) return;

    card.classList.add("flipped");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      let [first, second] = flippedCards;

      if (first.dataset.cat === second.dataset.cat) {
        first.classList.add("matched");
        second.classList.add("matched");
        flippedCards = [];

        checkIfLevelFinished(); // ✅ بس بنحتفل لو كلهم اتجابوا
      } else {
        setTimeout(() => {
          first.classList.remove("flipped");
          second.classList.remove("flipped");
          flippedCards = [];
        }, 1000);
      }
    }
  });
});

function checkIfLevelFinished() {
  const matchedCards = document.querySelectorAll(".matched");
  if (matchedCards.length === cards.length) {
    successSound.play();
    showCongrats();
  }
}

function showCongrats() {
  const msg = document.createElement("div");
  msg.classList.add("congrats-msg");
  msg.textContent = "Great job! 😎";
  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 4000);
}