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
//console.log(persona);

//uso de spread (objeto de propagacion)
const persona2 = {...persona, profesion: 'Ingeniero'}
persona2.nombre = 'Ivan'

console.log(persona);
console.log(persona2);