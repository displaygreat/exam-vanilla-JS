export const showNextCard = (target) => {
  const wrapper = target.parentElement;
  const card = wrapper.parentElement;
  card.classList.add("hide");
  card.nextElementSibling.classList.remove("hide");
};
