const fs = require('fs')
const chalk = require('chalk')
const { debug } = require('console')

const getNotes = () => {
    return "Your notes..."
}

//Add Note feature
const addNote = (title,body) =>{
    //Load file to add note from
    const notes = loadNotes()

    //Catching duplicates
    //ES6 
    const duplicateNotes = notes.filter((note)=>note.title === title)  // filter doesn't stop at the index it finds the condition true, instead it goes through the entire array regardless.
    const duplicateNote = notes.find((note => note.title === title)) // find is an alternative more suitable for 

    //ES5
    // const duplicateNotes = notes.filter((note)=>{
    //     return note.title === title
    // })

    //****************** DEBUGGING *******************/

    // console.log(duplicateNote)
    // console.log(title)

    debugger


    //****************** END *******************/


    // if(duplicateNotes.length===0){
    if(!duplicateNote){
        //Using push feature of an array to add data to the note array
        notes.push({
         title:title,
         body: body
        })

        //Save the note into the file
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added!"))
    }else{
        console.log(chalk.red.inverse("Note title taken!"))
    }

    // //Using push feature of an array to add data to the note array
    // notes.push({
    //     title:title,
    //     body: body
    // })

    // //Save the note into the file
    // saveNotes(notes)
}

//Challenge: Add removeNote feature
//Remove Note feature
const removeNote = (title)=>{
    //Load notes
    const notes = loadNotes()
    
    //Use filter array feature to save notes that we want to keep
    //ES6
    const notesToKeep = notes.filter((note)=>note.title !== title)

    //ES5
    // const notesToKeep = notes.filter((note)=>{
    //     return note.title !== title
    // })

    //Check if length of new array < length of array loaded in line 50
    if(notesToKeep.length<notes.length){
        console.log(chalk.green.inverse("Note Removed!"))
        //Save notes to the json file
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse("No Note Found!"))
    }
}

//Challenge: List Note feature
//List Note
const listNotes = () =>{
    const notes = loadNotes()
    if(notes.length === 0) return console.log(chalk.red.inverse("No Note Found!"))

    else{
        console.log(chalk.blue("Your notes"))
        notes.forEach((note)=>{
            console.log("Title: " + note.title + ", Body: " + note.body)
        })
    }

}

//Read Notes feature
const readNotes= (title) =>{
    const notes = loadNotes()
    if(notes.length === 0) return console.log(chalk.red.inverse("No Note Stored!"))

    else{
        const existNote = notes.find((note => note.title === title))
        if(existNote){
            console.log(chalk.green("Title: "+ existNote.title) + " Body: " + existNote.body)
        }

        else{
            console.log(chalk.red("No Note Found with Title: ") + title)
        }
        
    }

}

//Save note feature
const saveNotes = (notes)=>{
    //Writing to the file after stringyfying
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//Load note feature
const loadNotes = () =>{
    //Added error handling for empty no such file case
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        //Return empty array if file does not exist
        return []
    }
    /* const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    */
}

//Exporting only objects
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}