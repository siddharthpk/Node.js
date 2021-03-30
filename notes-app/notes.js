const fs = require('fs')

const getNotes = () => {
    return "Your notes..."
}

//Add Note feature
const addNote = (title,body) =>{
    //Load file to add note from
    const note = loadNotes()
    
    //Using push feature of an array to add data to the note array
    note.push({
        title:title,
        body: body
    })

    //Save the note into the file
    saveNotes(note)
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
    addNote: addNote
}