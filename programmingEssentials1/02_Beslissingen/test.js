let vijfGetallen = [1, 2, 3, 4, 5];

function berekenGemiddeld(getallen) {
  let som = 0;

  for(const getal of getallen){
    som += getal;
    console.log(som)
  }
  return som/getallen.length;
}

console.log(berekenGemiddeld(vijfGetallen))