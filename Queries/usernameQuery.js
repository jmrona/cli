import { isValidEmail } from "../Helpers/isValidEmail.js";

export const usernameQuery = {
  type: "input",
  name: "username",
  message: "Please provide a username:",
  validate: (username) => {
    if (!username.length) return "Please provide a username";
    if (!isValidEmail(username)) return "Please provide a valid username";
    return true;
  },
  filter: (username) => username.toLowerCase().trim(),
};
