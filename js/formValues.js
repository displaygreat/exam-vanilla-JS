export const getFormValues = (storage, form) => {
  const formData = new FormData(form);

  for (let value of formData.values()) {
    localStorage.setItem(storage, value);
  }
  if (form.querySelector('input[type="hidden"]')) {
    localStorage.setItem(
      storage,
      form.querySelector('input[type="hidden"]').value
    );
  }
};
