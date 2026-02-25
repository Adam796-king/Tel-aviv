// Først bruker vi 'require' for å referere til Express-biblioteket
const express = require('express');

// Deretter lager vi en ny instans av Express:
const app = express();

// Route 1
app.get('/', (req, res) => {
    res.send('Hello, world! Klokken er ' + new Date().toLocaleTimeString());
});

// Route 2
app.get('/her', (req, res) => {
    res.send(`
        <h1>Her er en overskrift</h1>
        <p>Og her er en paragraf</p>
    `);
});

// 👇 HER skal du legge den nye
app.get('/deltagere-1', (req, res) => {
    res.send(`
        <h1>Deltagere</h1>
        <ul>
            <li>Elev 1</li>
            <li>Elev 2</li>
            <li>Elev 3</li>
            <li>Elev 4</li>
        </ul>
    `);
});

// ALLTID SIST
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});