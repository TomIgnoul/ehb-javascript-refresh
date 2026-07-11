import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const userInput = readline.createInterface({ input, output });

console.log(`
  Kies een artiest:

  1. Red Hot Chilli Peppers
  2. AC/DC
  3. Netsky
  4. De Strangers
  `)

const antwoord = await userInput.question("Geef je keuze in: ");

if ( antwoord == 1)
  {
  console.log(`je koos voor Red Hot Chilli Peppers`)
}else if( antwoord == 2){
  console.log(`je koos voor AC/DC`)
}else if( antwoord == 3){
  console.log(`je koos voor Netsky`)
}else if(antwoord == 4){
  console.log(`
  je koos voor "strangers"
  Ze zijn de artist achter de hit: Mijnen blauwe geschelpte
    `)
}


// swtich
console.log(`
  
  ----met switch--
  
  `)
console.log(`
  Kies een artiest:

  1. Red Hot Chilli Peppers
  2. AC/DC
  3. Netsky
  4. De Strangers
  `)

const antwoord2 =  parseInt(await userInput.question("Geef je keuze in: "));


switch(antwoord2){
  case 1:
    console.log("je koos voor Red Hot Chilli Peppers");
    break;
  case 2:
    console.log("Je koos voor AC/DC");
    break;
  case 3: 
    console.log("Netsky");
    break;
  case 4:
    console.log("De Stragners");
    break;
}


userInput.close();
