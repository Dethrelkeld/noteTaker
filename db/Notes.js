const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);

class Notes {
    read() {
        return readFile('db/db.json', 'utf-8')
    }
    write(note) {
        return writeFile('db/db.json', JSON.stringify(note), 'utf-8');
    }
    getNotes() {
        return this.read().then(function (rawNotes) {
            let readNotes = [];

            try {
                readNotes = readNotes.concat(JSON.parse(rawNotes))
            } catch (error) {
                readNotes = [];
            } return readNotes
        });
    };
    addNote(note) {
        const newNote = {
            title: note.title,
            text: note.text,
            id: uuidv4()
        }

        return this.getNotes().then(notesArray => [...notesArray, newNote]).then(goodNote => this.write(goodNote))

    };

    deleteNote(id) {
        return this.getNotes().then(notesArray => notesArray.filter((note) => note.id !== id)).then(filteredNotes => this.write(filteredNotes))
    }


}

module.exports = new Notes() 