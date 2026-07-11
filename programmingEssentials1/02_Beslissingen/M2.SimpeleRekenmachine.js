import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

let getal1 = parseFloat(await userInput.question("Geef getal 1 in: "));
let getal2 = parseFloat(await userInput.question("Geef getal 2 in: "));

let keuzeOperator = await userInput.question("Wil je deze getallen aftrekken, optellen, vermenigvuldgen of delen? ");
keuzeOperator.toLowerCase();

if(keuzeOperator == "optellen"){
  console.log(getal1 + getal2);
}else if(keuzeOperator == "aftrekken"){
  console.log(getal1 - getal2);
}else if(keuzeOperator == "vermenigvuldgen"){
  console.log(getal1 * getal2);
}else if(keuzeOperator == "delen"){
  console.log(`uitkomst is: ${getal1 / getal2}`);
}

userInput.close()