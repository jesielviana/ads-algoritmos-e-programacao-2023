let entrada = "6.0 8.0 10.0";

// separa os valores em um array
let valores = entrada.split(" ");
// ordena o array de forma decrescente
valores = valores.sort((x, y) => y - x);
// desestrutura o array em variáveis
let [a, b, c] = valores;
// converte as variáveis para números
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);

// verifica se é possível formar um triângulo
if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else if (a ** 2 == b ** 2 + c ** 2) {
  console.log("TRIANGULO RETANGULO");
} else if (a ** 2 > b ** 2 + c ** 2) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (a ** 2 < b ** 2 + c ** 2) {
  console.log("TRIANGULO ACUTANGULO");
}
// verifica se é um triângulo equilátero ou isósceles
if (a == b && b == c) {
  console.log("TRIANGULO EQUILATERO");
} else if (a == b || b == c || a == c) {
  console.log("TRIANGULO ISOSCELES");
}
