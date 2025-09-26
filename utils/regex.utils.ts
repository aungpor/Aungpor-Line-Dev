export const antdFormValidateEnglishOnly = (
  _,
  value,
  validateText = "เป็นภาษาอังกฤษเท่านั้น",
) => {
  if (!value) {
    return Promise.resolve();
  }
  if (!/^[A-Za-z\s]*$/.test(value)) {
    return Promise.reject(validateText);
  }
  return Promise.resolve();
};
