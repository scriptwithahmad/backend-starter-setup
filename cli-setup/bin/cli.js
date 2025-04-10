#!/usr/bin/env node
import inquirer from "inquirer";
import { setupBackend } from "../index.js";

const targetDir = process.argv[2] || process.cwd();

inquirer
  .prompt([
    {
      type: "list",
      name: "databaseType",
      message: "Choose your database type:",
      choices: ["SQL", "NoSQL (MongoDB)"],
    },
  ])
  .then((answers) => {
    setupBackend(targetDir, answers.databaseType);
  });
