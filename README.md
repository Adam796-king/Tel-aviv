# Tel-aviv

## Arbeidslogg (2026-03-04)

1. Analysert eksisterende kode:
- Fant at `index.js` allerede hadde:
- `app.use(express.static('public'))`
- `/deltagere-2` (HTML fra database)
- `/deltagere-2-json` (JSON fra database)
- Fant at `Database/tel.sql` kun hadde `deltagere`.

2. Implementert nye backend-ruter i `index.js`:
- `/bilmerker` returnerer HTML-liste fra `bilmerker`.
- `/bilmerker-json` returnerer JSON fra `bilmerker`.
- `/skuespillere-og-filmer` returnerer HTML-liste fra JOIN.
- `/skuespillere-og-filmer-json` returnerer JSON fra samme JOIN.

3. Oppdatert databaseoppsett i `Database/tel.sql`:
- Lagt til flere rader i `deltagere`.
- Opprettet `bilmerker` + eksempeldata.
- Opprettet `filmer` + eksempeldata.
- Opprettet `skuespillere` + eksempeldata.
- Opprettet koblingstabell `skuespiller_i_film` med fremmednokler.
- Lagt inn eksempeldata i koblingstabellen.
- Lagt inn SQL-join som henter skuespiller + film.

4. Opprettet statiske sider i `public/`:
- `public/deltagere.html` (enkel webside).
- `public/skuespillere-og-filmer.html` (henter fra `/skuespillere-og-filmer-json` og viser liste).

## Sjekkpunkter for kjoring lokalt

1. Start server: `node index.js`
2. Kjor SQL i PostgreSQL (f.eks. via psql/pgAdmin): `Database/tel.sql`
3. Test URL-er:
- `http://localhost:3000/deltagere-2-json`
- `http://localhost:3000/deltagere-2`
- `http://localhost:3000/bilmerker`
- `http://localhost:3000/bilmerker-json`
- `http://localhost:3000/skuespillere-og-filmer`
- `http://localhost:3000/skuespillere-og-filmer-json`
- `http://localhost:3000/deltagere.html`
- `http://localhost:3000/skuespillere-og-filmer.html`
