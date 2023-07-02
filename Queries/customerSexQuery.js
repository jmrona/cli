export const customerSexQuery = {
  type: "list",
  name: "customerSex",
  message: "Please provide a customer sex:",
  choices: [
    { name: "Male", value: 1 },
    { name: "Female", value: 2 },
  ],
  validate: (username) => {
    if (!customerSex) return "Please select a customer sex";

    return true;
  },
};
