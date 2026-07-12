import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { parse } from "node:path";

const userInput = readline.createInterface({input , output})

let getal = await userInput.question("geef een getal: ");

for(let i = 0; i < getal; i++ ){
  if(i != getal && getal % i === 0){
    console.log(`Geen priemgetal`)
  }else{
    console.log(`priemgetal`)
  }
}