import inquirer from "inquirer";

export const showOptions = () => {
  return inquirer.prompt([
    {
      name: "command",
      message: "What would you like to do?",
      type: "rawlist",
      choices: [
        { name: "Create a new user", value: "create-user" },
        { name: "Populate an existing user", value: "populate-user" },
        { name: "Seed database", value: "seed-db" },
        { name: "help", value: "help" },
      ],
      validate: (options) => {
        if (!options.length) {
          return "Choose at least one of the above, use space to choose the option";
        }

        return true;
      },
    },
  ]);
};

export { createUser } from "./create-user/index.js";
export { populateUser } from "./populate-user/index.js";
export { seedDB } from "./seed-db/index.js";
export { help } from "./help/help.js";
