export const passwordQuery = {
  type: "password",
  name: "password",
  message: "Please provide a password:",
  validate: (password) => {
    if (!password.length) return "Please provide a valid password";
    if (password.length < 5) return "The password must have at least 5 characters";
    return true;
  },
  filter: (password) => password.trim(),
};
