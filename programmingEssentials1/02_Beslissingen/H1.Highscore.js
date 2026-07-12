let vijfGetallen = [1, 2, 3, 4, 5];

function berekenGemiddeld(getallen) {
  let som = 0;

  for(const getal of getallen){
    som += getal;
  }
  return som/getallen.length;
}


console.log(`Maximum: ${Math.max(...vijfGetallen)}`);
console.log(`Maximum: ${Math.min(...vijfGetallen)}`);
console.log(`Gemiddelde: ${berekenGemiddeld(vijfGetallen)} `);