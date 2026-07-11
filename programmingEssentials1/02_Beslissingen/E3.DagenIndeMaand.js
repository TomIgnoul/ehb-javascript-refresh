import * as readline from "node:readline/promises";
import {stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({input, output});


let maand = await userInput.question("Welke maand? ");
maand = maand.toLowerCase();

let aantaldagen = null; 

switch(maand){ 
  case "januari":
  case "maart":
  case "mei":
  case "juli":
  case "augustus": 
  case "oktober":
  case "december":
    aantaldagen = 31;
    break; 

  case "april":
  case"juni":
  case "september":
  case"november":
    aantaldagen = 30;
    break;
  
  case "februari":
    aantaldagen = "Is het een schrikkeljaar? dan 28. Als niet dan 30";
    break;

  default:
    console.log("Die maand ken ik niet. Heb je misschien een typfout gemaakt?");
}

console.log(`De maand ${maand} heeft ${aantaldagen} dagen`);

userInput.close();