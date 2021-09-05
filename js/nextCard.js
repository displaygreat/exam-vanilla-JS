export const showNextCard = (target) => {
  const cards = document.querySelectorAll(".card");
  const card = target.closest(".card");
  card.classList.add("hide");
  for (let i = 0; i < cards.length; i++) {
    if (card === cards[i]) {
      cards[i + 1].classList.remove("hide");
    }
  }
};
