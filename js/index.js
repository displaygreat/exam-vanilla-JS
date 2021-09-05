import { shuffleCards } from "./shuffling.js";
import { showProgress } from "./progress.js";
import { getExamineeName } from "./start.js";
import { getAmericanAnswer } from "./american.js";
import { getCompleteAnswer } from "./complete.js";
import { dragndrop } from "./dragndrop.js";

shuffleCards();
showProgress();
getExamineeName();
getAmericanAnswer();
getCompleteAnswer();
dragndrop();

// var colors = [“blue”, “white”, “green”, “navy”, “pink”, “purple”, “orange”, “yellow”, “black”, “brown”];
// var randomColor = colors[(Math.floor(Math.random() * (colors.length)))]
