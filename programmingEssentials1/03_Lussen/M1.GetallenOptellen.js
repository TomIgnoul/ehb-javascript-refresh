import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { parse } from "node:path";

const userInput = readline.createInterface({input , output})
let ingegevenNummer = 0;
let nieuwNummer= 0;

do{
  ingegevenNummer = parseFloat(await userInput.question("geef een nummer in. 0 om te stoppen: "));
  nieuwNummer += ingegevenNummer; 
}while(ingegevenNummer != 0);

userInput.close();
console.log(`Som van alle getallen: ${nieuwNummer}`)