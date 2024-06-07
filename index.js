const express = require("express");
const cors = require("cors");
const database = require("./dbconfig");
const app = express();
const port = process.env.port || 666;

app.listen(port, () => console.log(`Escuchando en puerto ${port}... `));

app.use(express.json());
app.use(cors());

app.get("/categoria", (req, res) => {
    database.query('SELECT * FROM categoria', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.get("/canales/:id", (req, res) => {
    const { id } = req.params;
    database.query('SELECT * FROM canal WHERE idcategoria = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});

app.get("/canal/:id", (req, res) => {
    const { id } = req.params;
    database.query('SELECT * FROM canal WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});