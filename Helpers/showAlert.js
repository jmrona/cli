import chalk from "chalk";

export const showAlert = ({ type = "info", message = "", bg = false, bold = false, italic = false, underline = false }) => {
  if (!type && !message) {
    console.error("Provide a type and message valid");
    return;
  }

  let alert = chalk;

  if (bold) {
    alert = alert.bold;
  }

  if (italic) {
    alert = alert.italic;
  }

  if (underline) {
    alert = alert.underline;
  }

  if (type === "info") {
    if (bg) {
      alert = alert.bgBlue(`  ${message}  `);
    } else {
      alert = alert.blue(message);
    }
  }

  if (type === "success") {
    if (bg) {
      alert = alert.bgGreen(`  ${message}  `);
    } else {
      alert = alert.green(message);
    }
  }

  if (type === "danger") {
    if (bg) {
      alert = alert.bgRed(`  ${message}  `);
    } else {
      alert = alert.red(message);
    }
  }

  return console.log(alert);
};
