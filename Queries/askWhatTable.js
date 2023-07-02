import { allTables } from "../Helpers/allTables.js";

export const askWhatTable = {
  type: "checkbox",
  name: "tables",
  message: "What tables would you like to populate?",
  choices: allTables,
};
