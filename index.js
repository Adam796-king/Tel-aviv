const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "skoleprosjekt",
  password: "Ad0410is",
  port: 5432,
});

app.use(express.static("public")); // Serve statiske filer

/* -------- DELTAGERE -------- */

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

app.get("/deltagere-2", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM deltagere ORDER BY id");
    let html = "<h1>Deltagere fra database</h1><ul>";
    result.rows.forEach(user => {
      html += `<li>${user.navn}</li>`;
    });
    html += "</ul>";
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send("Databasefeil");
  }
});

app.get("/deltagere-2-json", async (req, res) => {
  const result = await pool.query("SELECT * FROM deltagere ORDER BY id");
  res.json(result.rows);
});

/* -------- BILMERKER -------- */

app.get("/bilmerker", async (req, res) => {
  const result = await pool.query("SELECT * FROM bilmerker");
  let html = "<h1>Bilmerker</h1><ul>";
  result.rows.forEach(bil => {
    html += `<li>${bil.merke}</li>`;
  });
  html += "</ul>";
  res.send(html);
});

app.get("/bilmerker-json", async (req, res) => {
  const result = await pool.query("SELECT * FROM bilmerker");
  res.json(result.rows);
});

/* -------- SKUESPILLERE OG FILMER -------- */

app.get("/skuespillere-og-filmer", async (req, res) => {
  const result = await pool.query(`
    SELECT s.navn AS skuespiller, f.tittel AS film
    FROM skuespiller_i_film sif
    JOIN skuespillere s ON sif.skuespiller_id = s.id
    JOIN filmer f ON sif.film_id = f.id
    ORDER BY s.navn, f.tittel
  `);
  let html = "<h1>Skuespillere og filmer</h1><ul>";
  result.rows.forEach(row => {
    html += `<li>${row.skuespiller} - ${row.film}</li>`;
  });
  html += "</ul>";
  res.send(html);
});

app.get("/skuespillere-og-filmer-json", async (req, res) => {
  const result = await pool.query(`
    SELECT s.navn AS skuespiller, f.tittel AS film
    FROM skuespiller_i_film sif
    JOIN skuespillere s ON sif.skuespiller_id = s.id
    JOIN filmer f ON sif.film_id = f.id
    ORDER BY s.navn, f.tittel
  `);
  res.json(result.rows);
});

/* -------- START SERVER -------- */

app.listen(3000, () => console.log("Server listening on port 3000"));