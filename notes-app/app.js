//const validator = require('validator')

//console.log(validator.isEmail('siddharthpk@gmail.com'))

//console.log(validator.isURL('https://siddharthpk.me'))

// const chalk = require('chalk')

// console.log(chalk.blue('Error'))
// console.log(chalk.bold.green('Success'))
// console.log(chalk.bold.red('Success'))
// console.log(chalk.bgRed('Success'))

//Importing notes.js & chalk npm package
const getNotes = require('./notes.js')
const chalk = require('chalk')

// Priting value returned from notes.js
console.log(getNotes())

// Priting sucess in greem usig chalk 
const msg = chalk.green('Success!')
console.log(msg)

//Takes in the cmd line args
console.log(process.argv)

//Prints 3rd variable in the array argv
console.log(process.argv[2])
