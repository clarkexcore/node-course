console.log('Starting notes.js');

const fs = require('fs');

//This is so that the app doesn't crash when adding to our notes-data.json file
let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        return notes = JSON.parse(notesString);
    } catch (e) {
        return [];
    }
}

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


let addNote = (title, body) => {

    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    
    //This is to check for duplicate notes.
    let duplicateNotes = notes.filter((note) => note.title === title);

    //Only print the note if there are no duplicate titles. 
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    console.log("Getting note", title);
};

let removeNote = (title) => {
    console.log("Removing note", title);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}