//Importing notes.js & chalk npm package
const getNotes = require('./notes.js')
const chalk = require('chalk')

//Import yargs package
const yargs = require('yargs')
const { string } = require('yargs')

// Customize yargs version
yargs.version('1.1.0')

// Add note
yargs.command({
    command : 'add',                    // name of the command
    describe: 'Adds a new note',        // Description of the command
    builder: {                          // property that allows to create options for the given command
        title: {                        // Builder takes an object as a value which can be customized
            describe: 'Note title',     // same as command
            demandOption: true,         // Makes option input required
            type: 'string'              // defines type of the option 
        }
    },
    handler: function (argv){       // A placeholder function to execute the desired functionality
        console.log('Title: ' + argv.title)
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


// Parses the cmd line arguments 
yargs.parse()


// console.log(process.argv)
// console.log(yargs.argv)

