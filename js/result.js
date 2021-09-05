const rightAnswers = [
  {
    americanAnswer: "שנעשה מעשים טובים כמספר גרגרי הרימון",
  },
  {
    completeAnswer: "שקדייה",
  },
  {
    dragndropAnswer: "1,2,3,4",
  },
];

const compareObjects = (item1, item2) => {
  return JSON.stringify(item1) === JSON.stringify(item2);
};

const getResult = () => {
  const examineeAnswers = JSON.parse(localStorage.getItem("answers")).slice(1);
  const examineeRightAnswers = [];
  for (let i = 0; i < examineeAnswers.length; i++) {
    rightAnswers.forEach((item) => {
      if (compareObjects(item, examineeAnswers[i])) {
        examineeRightAnswers.push(item);
      }
    });
  }

  const countRight = document.querySelector(".card-count-right");
  const countTotal = document.querySelector(".card-count-total");
  countRight.textContent = examineeRightAnswers.length;
  countTotal.textContent = rightAnswers.length;
};

export const result = () => {
  const btnNext = document.querySelectorAll(".button-next");
  btnNext[btnNext.length - 1].addEventListener("click", () =>
    setTimeout(getResult, 0)
  );
};
