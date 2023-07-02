import inquirer from "inquirer";

/**
 * Returns the sum of a and b
 * @param {String} type
 * @param {String} name
 * @param {String} message
 * @param {Function} validate @returns {Boolean} If set to true, the function will return an array
 * @param {Function} filter @returns {Boolean} If set to true, the function will return an array
 */

const INITIAL_VALUE = { type: "input", name: "", message: "", validate: () => {}, filter: () => {} };

export const ask = (questions = [INITIAL_VALUE]) => {
  return inquirer.prompt(questions);
};
