const fetch = require('node-fetch'); //Declaración de fetch
async function start() { //Se crea un método de inicio  
    const response = await fetch('http://api.icndb.com/jokes/random/5'); //Se llama al API con fetch
    const json = await response.json(); //Se captura la respuesta de manera asíncrona
    console.log(json); //Se imprime los chistes en consola
}
start(); //Llamada al método