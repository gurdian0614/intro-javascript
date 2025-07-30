// Desestructuracion
const persona = {
    nombre: 'Roger',
    apellido: 'Gurdian',
    edad: 15,
    direccion: {
        ciudad: 'SPS',
        lng: 34.923321,
        lat: 14.3232
    }
};

const {nombre, edad, direccion} = persona;
console.log(nombre);
console.log(edad);
console.log(direccion.ciudad);

const arreglo = ['1', 2, 3, 4];
const [arr1, arr2, arr3, arr4] = arreglo;
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);