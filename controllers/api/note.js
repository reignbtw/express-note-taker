const { Router } = require('express');

const fs = require('fs');

const routerNotes = new Router();

routerNotes.get('/', (req, res) => {
    const notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    res.send(notes);
});

routerNotes.post('/', (req, res) => {
    const notes = JSON.parse(data);
    const data = fs.readFileSync('./db/db.json');

    notes.push(req.body);
    console.log(notes);

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.sendStatus(201);
});

routerNotes.delete('/:id', (req, res) => {
    const id = req.params.id;

    let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    notes = notes.filter(note => note.id !== id);

    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.end();
})

module.exports = routerNotes;