const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

//Add Note feature
const addNote = (title,body) =>{
    //Load file to add note from
    const notes = loadNotes()

    //Catching duplicates
    //ES6 
    const duplicateNotes = notes.filter((note)=>note.title === title)

    //ES5
    // const duplicateNotes = notes.filter((note)=>{
    //     return note.title === title
    // })

    if(duplicateNotes.length===0){
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

    //Check if length of new array < length of array loaded in line 46
    if(notesToKeep.length<notes.length){
        console.log(chalk.green.inverse("Note Removed!"))
        //Save notes to the json file
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red.inverse("No Note Found!"))
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
    removeNote: removeNote
}