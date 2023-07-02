export const askPopulateTable = (table) => ({
  type: "confirm",
  name: "populateConfirm",
  message: `Do you want to populate ${table}?`,
});
