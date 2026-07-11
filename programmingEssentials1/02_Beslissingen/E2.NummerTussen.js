import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { parse } from "node:path";

const userInput = readline.createInterface({input , output})

let minimum = 23;
let maximum = 45;

let guessNumber = parseFloat(
  await userInput.question("Give a number: ")
)



if(guessNumber > minimum && guessNumber < maximum){
  console.log(`je getal ${guessNumber} ligt tussen ${minimum} en ${maximum}`)
}else{
    console.log(`je getal ${guessNumber} ligt niet tussen ${minimum} en ${maximum}`)
}

userInput.close();