import ora from "ora";
import { ask } from "../../Helpers/ask.js";
import { askPopulateTable, askPopulateAll, askWhatTable } from "../../Queries/index.js";
import { allTables } from "../../Helpers/allTables.js";

export const seedDB = async (params = {}) => {
  let { tables } = params;
  let populateAll = false;

  if (tables.length === 0) {
    const answer = await ask(askPopulateAll);
    populateAll = answer.populateAll;

    if (populateAll) {
      const spinner = ora("Populating...").start();
      tables = allTables;
      let tablesPopulated = 0;
      tables.forEach(async (table) => {
        spinner.text = `Populating ${table}...`;
        const isPopulated = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
            return true;
          }, 3000);
        });

        isPopulated && tablesPopulated++;

        if (tables.length - 1 === tablesPopulated) {
          console.log("");
          spinner.stopAndPersist({ symbol: "✅", text: "Tables populated successfully!" });
          console.log("");
        }
      });
      return;
    }

    if (!populateAll) {
      const answer = await ask(askWhatTable);
      tables = answer.tables;
    }
  }

  if (tables.length !== 0) {
    const { populateConfirm } = await ask(askPopulateTable(tables.join(", ")));

    if (populateConfirm) {
      const spinner = ora("Populating...").start();

      let tablesPopulated = 0;
      tables.forEach(async (table) => {
        spinner.text = `Populating ${table}...`;

        const isPopulated = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(true);
            return true;
          }, 3000);
        });

        isPopulated && tablesPopulated++;

        if (tables.length === tablesPopulated) {
          console.log("");
          spinner.stopAndPersist({ symbol: "✅", text: "Tables populated successfully!" });
          console.log("");
        }
      });
    }
  }
};
