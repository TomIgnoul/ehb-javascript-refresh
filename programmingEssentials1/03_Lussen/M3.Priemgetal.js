import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { parse } from "node:path";
import { get } from "node:http";

const userInput = readline.createInterface({input , output})

let getal = await userInput.question("geef een getal: ");
let priemgetal= false;

if(getal < 2){
  priemgetal = false;
  console.log(`geen priemgetal`)
}else if(getal % getal === 0 && getal % 1 ==0){
  priemgetal = true;
  console.log(`een priemgetal`)
}else{
  priemgetal = false;
console.log(`geen priemgetal`)
}

userInput.close();
