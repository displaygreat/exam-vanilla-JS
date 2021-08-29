import { handleFormSubmit } from "./form.js";

export const getAmericanAnswer = () => {
  const americanForm = document.querySelector(".american-form");
  const americanInputs = document.querySelectorAll(".american-input");

  americanInputs.forEach((item) => {
    item.addEventListener("click", () => {
      for (let input of americanInputs) {
        if (input.checked) {
          input.value = input.nextElementSibling.textContent;
        }
      }
    });
  });
  handleFormSubmit("americanAnswer", americanForm);
};
