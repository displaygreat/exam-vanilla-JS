export const showProgress = () => {
  const progressBar = document.querySelectorAll(".progress-bar");
  const cards = document.querySelectorAll(".card");

  progressBar.forEach((item, index) => {
    for (let i = 0; i < cards.length - 2; i++) {
      let circle = document.createElement("div");
      circle.classList.add("progress-circle");
      item.append(circle);
    }

    const children = item.children;
    for (let j = 0; j < children.length; j++) {
      children[index].classList.add("active");
    }
  });
};
