import chalk from "chalk";

export function logColor(...msg: (string | number)[]) {
  const messages = msg
    .map((message) => chalk.bgGreen.whiteBright(String(message)))
    .join(" ");

  console.log(chalk.green(messages));
}
