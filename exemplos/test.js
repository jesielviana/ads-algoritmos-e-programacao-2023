var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
//1035
let valores = lines.shift()
let [a,b,c,d] = valores.split(' ')
if(b > c && d > a && (c+d) > (a+b) && c > 0 && d > 0 && a % 2 == 0){
    console.log('Valores aceitos')
}else{
    console.log('Valores nao aceitos')
}