import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({input , output})

let guessNumber = parseFloat(
  await userInput.question("Enter a number ")
)

if (guessNumber % 2 === 0){
  console.log("even");
} else {
  console.log("oneven");
}

userInput.close();