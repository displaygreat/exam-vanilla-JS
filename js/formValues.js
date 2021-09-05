export const getFormValues = (storage, form) => {
  const formData = new FormData(form);
  const answersArray = JSON.parse(localStorage.getItem("answers")) || [];

  for (let value of formData.values()) {
    answersArray.push({ [storage]: value });
    localStorage.setItem("answers", JSON.stringify(answersArray));
  }
  if (form.querySelector('input[type="hidden"]')) {
    answersArray.push({
      [storage]: form.querySelector('input[type="hidden"]').value,
    });
    localStorage.setItem("answers", JSON.stringify(answersArray));
  }
};
