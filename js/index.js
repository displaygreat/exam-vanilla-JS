import { shuffleCards } from "./shuffling.js";
import { showProgress } from "./progress.js";
import { getExamineeName } from "./start.js";
import { getAmericanAnswer } from "./american.js";
import { getCompleteAnswer } from "./complete.js";
import { dragndrop } from "./dragndrop.js";
import { result } from "./result.js";

localStorage.clear();
shuffleCards();
showProgress();
getExamineeName();
getAmericanAnswer();
getCompleteAnswer();
dragndrop();
result();
// var colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
// var randomColor = colors[(Math.floor(Math.random() * (colors.length)))]
