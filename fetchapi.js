//Fetch una funcion para obtener recursos
// nos retorna una promesa
// then y catch

console.log('inicia peticion');
fetch('http://127.0.0.1:5500/respuestas.txt')
    .then (result => result.text())
    .then(datos => console.log(datos));

console.log('inicia peticion 1');
fetch('http://127.0.0.1:5500/respuestas.json')
    .then (result => result.json())
    .then(datos => console.log(datos));