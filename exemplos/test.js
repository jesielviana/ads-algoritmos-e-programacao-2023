let entrada = '7.0 5.0 7.0';
let [a, b, c] = entrada.split(" ").sort((x, y) => y - x);
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else if (a ** 2 == b ** 2 + c ** 2) {
  console.log("TRIANGULO RETANGULO");
} else if (a ** 2 > b ** 2 + c ** 2) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (a ** 2 < b ** 2 + c ** 2) {
  console.log("TRIANGULO ACUTANGULO");
} else if (a == b && b == c) {
  console.log("TRIANGULO EQUILATERO");
} else if (a == b || b == c || a == c) {
  console.log("TRIANGULO ISOSCELES");
}
