//Importing notes.js & chalk npm package
const getNotes = require('./notes.js')
const chalk = require('chalk')

//Import yargs package
const yargs = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Add note
yargs.command({
    command : 'add',                // name of the command
    describe: 'Adds a new note',    // Description of the command
    handler: function (){           // A placeholder function to execute the desired functionality
        console.log('Adding a new note')
    }
})

// Remove note
yargs.command({
    command : 'remove',
    describe: 'Removes a note',
    handler: function (){
        console.log('Removing a note')
    }
})

// List
yargs.command({
    command : 'list',
    describe: 'Lists all notes',
    handler: function (){
        console.log('Listing all notes')
    }
})

// Read
yargs.command({
    command : 'read',
    describe: 'Read a note',
    handler: function (){
        console.log('Reading a note')
    }
})

// console.log(process.argv)
console.log(yargs.argv)

