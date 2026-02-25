const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, world! Klokken er " + new Date().toLocaleTimeString());
});

app.get("/her", (req, res) => {
  res.send(`
    <h1>Her er en overskrift</h1>
    <p>Og her er en paragraf</p>
  `);
});

app.get("/deltagere-1", (req, res) => {
  res.send(`
    <h1>Deltagere</h1>
    <ul>
      <li>Adam</li>
      <li>Sara</li>
      <li>Jonas</li>
      <li>Emilie</li>
    </ul>
  `);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});