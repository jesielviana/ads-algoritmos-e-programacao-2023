let numeros = [1, 2, 3, 4, 5, 6, 7];

const num = 5;

let meio = getMeio(numeros);
while (true) {
  if (meio < 0 || meio > numeros.length) {
    console.log("numero nao existe na lista");
    break;
  }
  if (numeros[meio] === num) {
    console.log("numero encontrado na posicao ", meio);
    break;
  } else if (num > numeros[meio]) {
    numeros = numeros.splice(meio, numeros.length - meio);
    meio = getMeio(numeros);
  } else if (num < numeros[meio]) {
    numeros = numeros.splice(0, numeros.length - meio);
    meio = getMeio(numeros);
  }
}

function getMeio(lista) {
  return parseInt(lista.length / 2);
}
