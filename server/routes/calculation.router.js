const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "calculator_data" ORDER BY id DESC LIMIT 10;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

// Setup a POST route to add a new song to the database
router.post('/', (req, res) => {
    const newSong = req.body;
    const sqlText = `INSERT INTO songs (rank, artist, track, published) VALUES 
  ($1, $2, $3, $4)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [newSong.rank, newSong.artist, newSong.track, newSong.published])
        .then((result) => {
            console.log(`Added song to the database`, newSong);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

module.exports = router;