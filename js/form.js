import { getFormValues } from "./formValues.js";
import { showNextCard } from "./nextCard.js";

export const handleFormSubmit = (storage, form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getFormValues(storage, form);
    showNextCard(e.target);
  });
};
