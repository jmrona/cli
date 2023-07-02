import inquirer from "inquirer";
import { isValidEmail } from "../../Helpers/isValidEmail.js";
import { API } from "../../Helpers/api.js";
import { ask } from "../../Helpers/ask.js";
import { showAlert } from "../../Helpers/showAlert.js";
import ora from "ora";
import { usernameQuery, addOrdersQuery, askWhatOrder, addResultsQuery, askOrderStatus, askWhatResult } from "../../Queries/index.js";

export const populateUser = async (params = {}) => {
  let { username } = params;

  if (!username) {
    const anwser = await ask(usernameQuery);
    username = anwser.username;
  }

  const payload = {
    customerEmailAddress: username,
  };

  // Check if the user already exist

  // const alreadyExist = await API({ endpoint: "/check-email", method: "POST", payload });
  let alreadyExist = false;

  // while (!alreadyExist) {
  //   showAlert({ type: "danger", message: "This username already exist" });
  //   const { userName } = await ask(usernameQuery);
  //   alreadyExist = true;
  // }

  const spinner = ora("Loading user...").start();

  // Create new user
  const userExist = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });

  if (userExist) {
    spinner.stopAndPersist({ symbol: "✅", text: "User loaded!" });
  }

  // Would you like to add some orders?
  let { addOrders } = await ask(addOrdersQuery);
  let listOrdersToAdd = [];

  while (addOrders === true) {
    const { orderToAdd } = await ask(askWhatOrder);

    if (orderToAdd.length === 0) {
      addOrders = await ask({ ...addOrdersQuery, message: "You didn't select a order. Would you like to add some orders?" });
      addOrders = addOrders.addOrders;
    }

    const { orderStatus } = await ask(askOrderStatus(orderToAdd));
    listOrdersToAdd.push({ orderId: orderToAdd, orderStatus });

    addOrders = await ask({ ...addOrdersQuery, message: "Would you like to add more orders?" });
    addOrders = addOrders.addOrders;
  }

  // Would you like to add some result?
  let { addResults } = await ask(addResultsQuery);
  let resultsToAdd = [];

  if (addResults) {
    resultsToAdd = await ask(askWhatResult);
    resultsToAdd = resultsToAdd.resultsToAdd;
  }

  while (addResults && resultsToAdd.length === 0) {
    addResults = await ask({ ...addResultsQuery, message: "You didn't select a result. Would you like to add some result?" });
    addResults = addResults.addResults;

    if (addResults) {
      resultsToAdd = await ask(askWhatResult);
      resultsToAdd = resultsToAdd.resultsToAdd;
    }
  }

  console.log({ username, addOrders, listOrdersToAdd, addResults, resultsToAdd });

  console.log("");
  showAlert({ type: "success", message: " ✅ User populated successfully! " });
  console.log("");
};
