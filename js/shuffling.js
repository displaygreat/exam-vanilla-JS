export const shuffleCards = () => {
  const cardsQuestion = Array.from(document.querySelectorAll(".card-question"));
  console.dir(cardsQuestion);

  //Fisher-Yates algorithm
  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  shuffle(cardsQuestion);
};
