export const askWhatResult = {
  type: "checkbox",
  name: "resultsToAdd",
  message: "Select what results would you like to add:",
  choices: [
    { value: 1, name: "Vitamin D" },
    { value: 2, name: "Baseline plus" },
    { value: 3, name: "MyForm" },
    { value: 4, name: "Antibody" },
    { value: 5, name: "Bespoke test" },
  ],
};
