//Importing notes.js & chalk npm package
const getNotes = require('./notes.js')
const chalk = require('chalk')

// Take input of the 3rd argv variable from cmd line
const cmd = process.argv[2]

//Printing the entire array (For Testing)
console.log(process.argv)


// Condition to check if users wants to add a new note
if(cmd === 'add'){
    console.log('Adding note!')
}

// Condition to check if users wants to remove a new note
else if(cmd === 'remove'){
    console.log('Removing note!')
}