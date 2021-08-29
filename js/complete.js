import { handleFormSubmit } from "./form.js";

export const getCompleteAnswer = () => {
  const completeForm = document.querySelector(".complete-form");
  handleFormSubmit("completeAnswer", completeForm);
};
