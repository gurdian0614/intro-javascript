const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}

// Cuando la funcion solo tiene una linea de codigo no es necesario las llaves
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => 'Hola Mundo';

console.log(saludar('Roger'));
console.log(saludar2('Ivan'));
console.log(saludar3('Vegeta'));
console.log(saludar4());