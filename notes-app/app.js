//Importing notes.js & chalk npm package
const notes = require('./notes.js')
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
        },
        body: {
            describe: 'Note body',     
            demandOption: true,        
            type: 'string'
        }
    },
    handler (argv){       // A placeholder method to execute the desired functionality
        notes.addNote(argv.title, argv.body) //Revised to retreive title and body from notes.js
    }
})

//Challenge: Add removeNote feature
// Remove note
yargs.command({
    command : 'remove',
    describe: 'Removes a note',
    builder: {                          //Added builder to have objects options 
        title: {                        //Added title option in the remove cmd
            describe: 'Note Title',
            demandOption: true,         //Title mandatory
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

// List command
yargs.command({
    command : 'list',
    describe: 'Lists all notes',
    handler(){
        notes.listNotes()
    }
})

// Read command
yargs.command({
    command : 'read',
    describe: 'Read a note',
    handler (){
        console.log('Reading a note')
    }
})


// Parses the cmd line arguments 
yargs.parse()


// console.log(process.argv)
// console.log(yargs.argv)

