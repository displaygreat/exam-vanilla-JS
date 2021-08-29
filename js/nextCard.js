export const showNextCard = (target) => {
  const card = target.parentElement;
  card.classList.add("hide");
  card.nextElementSibling.classList.remove("hide");
};
