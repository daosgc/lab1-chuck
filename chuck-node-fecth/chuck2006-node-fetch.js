const fetch = require('node-fetch');

async function start() {
    
    const response = await fetch('http://api.icndb.com/jokes/random/5');
    const json = await response.json();
    console.log(json);
}

start();