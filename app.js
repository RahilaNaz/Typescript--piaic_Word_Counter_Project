#! /usr/bin/env node
//impoert inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colorfull welcome message.
console.log(chalk.bold.blueBright("\n \t\t Welcome Piaic Word Conter Project"));
console.log("=".repeat(60));
// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
//triming a sentence and spilitting into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n  - Word Count: ${chalk.bold.red(words.length)}`));
console.log("=".repeat(60));
