const nombre = 'Roger';
const apellido = 'Gurdian';

//const nombreCompleto = 'El nombre completo es: ' + nombre + ' ' + apellido
const nombreCompleto = `El nombre completo es: ${nombre} ${apellido}`;

function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(getSaludo(nombre));