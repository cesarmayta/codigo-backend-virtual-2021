let nombre = process.env.NOMBRE || 'sin nombre';
let email = process.env.EMAIL || 'no tienen correo';

console.log('Hola ' +  nombre);
console.log('Email : ' + email);