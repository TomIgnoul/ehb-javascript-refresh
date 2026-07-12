import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });
const resultaatFoutantwoord ="fout het antwoord is: ";
const resultaatGoedAntwoord ="Goed antwoord!";
let juisteAntwoorden= ["parijs", "8", "blauwe vinvis", "shakespeare", "8"]
let vragen = [
  "Wat is de hoofdstad van Frankrijk? ",
  "Hoeveel planeten zijn er in ons zonnestelsel? ",
  "Wat is het grootste zoogdier ter wereld? ",
  "Wie schreef het toneelstuk 'Romeo en Julia'? ",
  "Hoeveel poten heeft een spin? "
]
let teller = 0;


  for(let i = 0; i < vragen.length; i++){
    let antwoord = await userInput.question(vragen[i]);
    antwoord = antwoord.toLowerCase().toString();
    if (antwoord == juisteAntwoorden[i]){
      teller ++;
      console.log(resultaatGoedAntwoord);
    }else{
      console.log(`${resultaatFoutantwoord} ${juisteAntwoorden[i]}`)
    }
  }
  console.log(`Je hebt ${teller}/${juisteAntwoorden.length} punten gescoord op deze quiz`);
  userInput.close();
 

