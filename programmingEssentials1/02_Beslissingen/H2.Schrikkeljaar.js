import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

let antwoord = parseFloat(await userInput.question("geef een jaar in om te hoeveel dagen februari heeft "));

if(antwoord % 400 == 0 || (antwoord % 4 === 0 && antwoord % 100 !==0) ){
  console.log(`februari heeft 29 dagen`)
}else{
  console.log(`februari heeft 28 dagen`)
}

userInput.close();