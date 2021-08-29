import { handleFormSubmit } from "./form.js";

export const getExamineeName = () => {
  const startForm = document.querySelector(".start-form");
  handleFormSubmit("examineeName", startForm);
};
