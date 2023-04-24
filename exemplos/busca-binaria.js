const numeros = [1, 2, 3, 4, 5, 6, 7];
const buscar = 3;

function getMeio(inicio, fim) {
  return parseInt((inicio + fim) / 2);
}

let fim = numeros.length;
let inicio = 0;
let meio = getMeio(inicio, fim);

while (true) {
  if (numeros[meio] == buscar) {
    console.log("número encontrado, posição: ", meio);
    break;
  } else if (meio == 0 || meio == numeros.length - 1) {
    console.log("numero nao encontrado");
    break;
  } else if (buscar > numeros[meio]) {
    inicio = meio;
    meio = getMeio(meio, fim);
  } else if (buscar < numeros[meio]) {
    fim = meio;
    meio = getMeio(inicio, meio);
  }
}
