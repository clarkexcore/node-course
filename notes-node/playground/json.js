// let obj = {
//     name: 'Alex'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Alex", "age": 28}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

//Turns object into a string
let originalNoteString = JSON.stringify(originalNote);

//Writes the file notes.json with the string
fs.writeFileSync('notes.json', originalNoteString);

//Reads the notes.json file and stores it as a variable
let noteString = fs.readFileSync('notes.json');

//Turns the note.json file and turns it back into an object
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

