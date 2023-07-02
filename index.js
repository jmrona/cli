import figlet from "figlet";
import argv from "minimist";
import { createUser, showOptions, populateUser, seedDB, help } from "./Commands/index.js";
import { showAlert } from "./Helpers/showAlert.js";
import { isValidEmail } from "./Helpers/isValidEmail.js";
import { checkTableExist } from "./Helpers/checkTableExist.js";

(async () => {
  try {
    new Promise((resolve, reject) => {
      figlet("Forth CLI", { horizontalLayout: "fitted" }, function (err, data) {
        console.log("");
        console.log("");
        console.log(data);
        console.log("");
        resolve();
      });
    }).then(async () => {
      const options = argv(process.argv.slice(2));
      const action = options._[0];
      // console.log(action, options);

      const username = options?.u || options?.username || "";
      const password = options?.p || options?.password || "";
      const customerSex = options?.s || options?.sex || "";
      let tables = options?.t || options?.table || "";
      tables = tables ? [tables] : [];

      if (action && action === "createUser") {
        if (!["female", "male"].includes(customerSex.toLowerCase())) {
          showAlert({ type: "danger", message: "❌ Wrong custom sex. Please, enter female or male." });
          return;
        }

        if (!isValidEmail(username)) {
          showAlert({ type: "danger", message: "❌ Enter a valid username" });
          return;
        }

        if (!password || password.toString().length < 5) {
          showAlert({ type: "danger", message: "❌ Enter a valid password. At least 5 characters" });
          return;
        }

        if (username && password && customerSex) {
          const username = options?.u || options?.username || "";
          return createUser({ username, password, customerSex: customerSex.toLowerCase() === "female" ? 2 : 1 });
        }
      }

      if (action && action === "populateUser") {
        if (!isValidEmail(username)) {
          showAlert({ type: "danger", message: "❌ Enter a valid username" });
          return;
        }

        return populateUser({ username });
      }

      if (action && action === "seedDB") {
        tables.map((table) => {
          if (!checkTableExist(table)) {
            showAlert({ type: "danger", message: `❌ ${table} doesn't exist` });
            return;
          }
        });

        return seedDB({ tables });
      }

      if (action && !["createUser", "populateUser", "seedDB"].includes(action)) {
        console.log("");
        showAlert({ type: "danger", bg: true, message: "[Error]: Wrong options" });
        console.log("");
      }

      const { command } = await showOptions();

      if (command === "create-user") {
        createUser();
      }

      if (command === "populate-user") {
        populateUser();
      }

      if (command === "seed-db") {
        seedDB();
      }

      if (command === "help") {
        help();
      }
    });
  } catch (err) {
    console.error(`There was an error while talking to the API: ${err.message}`, err);
  }
})();
