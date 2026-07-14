let tafelVanVijfUitkomst = maakArrayVanTafelvanVijf();
let tafelVanDrieUitkomst = maakArrayVanTafelvanDrie();
let tafelVanDrieEnVijfUitkomst = maakArrayVanGemeenschappelijkeDelerDrieEnVijf();


function maakArrayVanTafelvanDrie(){
  let tafelVanDrieArray = []
  for(let i = 1; i < 35; i++){
      let j = i * 3
      tafelVanDrieArray.push(j);
  }
  return tafelVanDrieArray;
}


function maakArrayVanTafelvanVijf(){
  let tafelVanVijfArray = [];
  for(let i = 1; i <= 20; i++){
      let j = i * 5;
      tafelVanVijfArray.push(j);
  }
  return tafelVanVijfArray;
}

function maakArrayVanGemeenschappelijkeDelerDrieEnVijf(){
  let gemeenschappelijkeDelerDrieEnVijfArray = [];
  let nummer = 15;
  for(let i = 1; i <= 20; i ++){
    let resultaat = i * nummer;
    gemeenschappelijkeDelerDrieEnVijfArray.push(resultaat);
  }
  return gemeenschappelijkeDelerDrieEnVijfArray;
}


for (let i = 1; i <= 100; i++) {
  if (tafelVanDrieEnVijfUitkomst.includes(i)) {
    console.log(`${i}: FizzBuzz`);
  } else if (tafelVanDrieUitkomst.includes(i)) {
    console.log(`${i}: Fizz`);
  } else if(tafelVanVijfUitkomst.includes(i)) {
    console.log(`${i}: Buzz`);
  }
}