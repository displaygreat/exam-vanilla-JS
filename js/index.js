import { getExamineeName } from "./start.js";
import { getAmericanAnswer } from "./american.js";
import { getCompleteAnswer } from "./complete.js";
import { dragndrop } from "./dragndrop.js";

const progressBar = document.querySelector(".progress-bar");
const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length - 2; i++) {
  let circle = document.createElement("div");
  circle.classList.add("progress-circle");
  progressBar.append(circle);
}

getExamineeName();
getAmericanAnswer();
getCompleteAnswer();
dragndrop();
