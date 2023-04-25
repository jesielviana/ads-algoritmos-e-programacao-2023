const numeros = [1, 2, 1, 2, 2, 2, 1, 1, 2, 2, 1, 1];

let invalidos = 0;
let anterior = 0;
let contadorRepetidos = 1;
for (n of numeros) {
  if (anterior != n) {
    if (contadorRepetidos > 1) {
      invalidos = invalidos + (contadorRepetidos - 1);
      contadorRepetidos = 1;
    }
  } else {
    contadorRepetidos++;
  }
  anterior = n;
}
if (contadorRepetidos > 1) {
  invalidos = invalidos + (contadorRepetidos - 1);
  contadorRepetidos = 1;
}
console.log(numeros.length - invalidos);

// by Jesiel Viana
