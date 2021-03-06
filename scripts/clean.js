const del = require("del");
const chalk = require("chalk");

(async () => {
  console.log(chalk.yellow("๐งน Cleaning dist files..."));
  try {
    await del(["dist"]);
    console.log(chalk.green("๐งผ /dist files have been cleaned!"));
    process.exit(0);
  } catch (err) {
    console.error(err);
    console.error("๐ Something went wrong when cleaning the /dist files!");
    process.exit(1);
  }
})();
