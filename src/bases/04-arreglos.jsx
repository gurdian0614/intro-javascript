//const arreglo = new Array(100);
//arreglo[0] = 5;
const arreglo = [1, 2, 3, 4];
arreglo.push(5);

let arreglo2 = [...arreglo, 6, 7];

const arreglo3 = arreglo2.map((numero) => {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);