console.log("Starting app.js");

//Third Party Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


//Created Modues
const notes = require('./notes.js');

//Process.argv is a way to pass data into our app (through the terminal).
const argv = yargs.argv;
let command = process.argv[2];

console.log('Command ', command);
console.log('Yargs ', argv);

if(command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note){
        console.log('Note created');
        console.log("--");
        console.log(`Title: ${note.title}`); 
        console.log(`Body: ${note.body}`); 
    } else {
        console.log("No note was added");
    }
    
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not recognized');
}

