const fs = require('fs')

const getNotes = () => {
    return "Your notes..."
}

//Add Note feature
const addNote = (title,body) =>{
    //Load file to add note from
    const notes = loadNotes()

    //Catching duplicates
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title
    })

    if(duplicateNotes.length===0){
        //Using push feature of an array to add data to the note array
        notes.push({
         title:title,
         body: body
        })

        //Save the note into the file
        saveNotes(notes)
        console.log("New Note Added!")
    }else{
        console.log("Note title taken!")
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
    const notes = loadNotes()
    
    const titleToRemove = notes.filter((note)=>{
        if(note.title === title){
            
            notes.pop({
                title:title
            }) 
        }
        
        return  title
    })
    console.log(title)
    saveNotes(notes)

   
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