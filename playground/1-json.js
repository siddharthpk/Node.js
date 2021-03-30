//File system library import
const fs = require('fs')
//const { fstat } = require('node:fs')

/*
***File writing***
// JS Object 
const book = {
    title :'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//This allows conversion of object/array to string
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

//This allows conversion of string to object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)

//writing data to a file in file system
fs.writeFileSync('1-json.json', bookJSON)
*/


/*
***File Read***
//Reading a file from filesystem
const dataBuffer = fs.readFileSync('1-json.json')

//Convert buffer data to String and parse using JSON.parse to convert into object
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
*/

//Challenge
//File read and parse
const dataBuffer = fs.readFileSync('1-json.json')
const data = JSON.parse(dataBuffer.toString())

//Changing name and age
data.name = "Sid"
data.age = 23
console.log(data)

//Stringfying and overwriting to file
const dataStringify = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataStringify)

