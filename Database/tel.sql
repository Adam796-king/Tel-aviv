CREATE DATABASE SKOLEPROSJEKT;

CREATE TABLE deltagere (
    id SERIAL PRIMARY KEY,
    navn VARCHAR(100) NOT NULL
);
INSERT INTO deltagere (navn) VALUES
('Adam'),
('Sara'),
('Jonas'),
('Emilie');

INSERT INTO deltagere (navn) VALUES
('Nora'),
('Oskar'),
('Fatima');

CREATE TABLE bilmerker (
    id SERIAL PRIMARY KEY,
    merke VARCHAR(100) NOT NULL
);

INSERT INTO bilmerker (merke) VALUES
('Volvo'),
('Toyota'),
('BMW'),
('Tesla');

CREATE TABLE filmer (
    id SERIAL PRIMARY KEY,
    tittel VARCHAR(100) NOT NULL
);

CREATE TABLE skuespillere (
    id SERIAL PRIMARY KEY,
    navn VARCHAR(100) NOT NULL
);

INSERT INTO filmer (tittel) VALUES
('The Matrix'),
('The Matrix Reloaded'),
('The Matrix Revolutions');

INSERT INTO skuespillere (navn) VALUES
('Keanu Reeves'),
('Laurence Fishburne'),
('Carrie-Anne Moss');

CREATE TABLE skuespiller_i_film (
    id SERIAL PRIMARY KEY,
    skuespiller_id INT NOT NULL REFERENCES skuespillere(id),
    film_id INT NOT NULL REFERENCES filmer(id)
);

INSERT INTO skuespiller_i_film (skuespiller_id, film_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3);

SELECT s.navn AS skuespiller, f.tittel AS film
FROM skuespiller_i_film sif
JOIN skuespillere s ON sif.skuespiller_id = s.id
JOIN filmer f ON sif.film_id = f.id
ORDER BY s.navn, f.tittel;
