let hoogte = 5;

let spaties = 2;
let sterren = 1;

// Bovenkant inclusief midden
for (let i = 0; i < 3; i++) {
  let regel = "";

  for (let j = 0; j < spaties; j++) {
    regel += " ";
  }

  for (let j = 0; j < sterren; j++) {
    regel += "*";
  }

  console.log(regel);

  spaties--;
  sterren += 2;
}

// Onderkant
spaties = 1;
sterren = 3;

for (let i = 0; i < 2; i++) {
  let regel = "";

  for (let j = 0; j < spaties; j++) {
    regel += " ";
  }

  for (let j = 0; j < sterren; j++) {
    regel += "*";
  }

  console.log(regel);

  spaties++;
  sterren -= 2;
}