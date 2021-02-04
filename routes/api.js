//  dependencies
const router = require('express').Router();
const notes = require('../db/Notes');
router.get('/notes', function(req, res) {
    notes.getNotes().then(notes => res.json(notes)).catch(err => res.status(500).json(err))
});

router.post('/notes', function(req, res) {
    notes.addNote(req.body).then(notes => res.json(notes)).catch(err => res.status(500).json(err))
});

router.delete('/notes/:id', function(req, res) {
    notes.deleteNote(req.params.id).then(notes => res.json(notes)).catch(err => res.status(500).json(err))
});

module.exports = router;