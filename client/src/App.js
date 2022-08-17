import React, {useEffect, useState} from "react"
import axios from "axios"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import AddButton from "./AddButton"

function App() {

  const [note, setNote] = useState([])

  useEffect(() => {

    getNotes()
  })

  function getNotes() {

    axios.get('http://localhost:5000/keeper')
    .then(res => setNote(res.data))
  }
        
  function addNote(input) {

    setNote(pValue => {

      return [...pValue, input]
    })
  }

  function deleteNote(id) { 
    
    axios.delete(`http://localhost:5000/keeper/remove/${id}`)
  }

  return(

    <>
      <Header />
      {note.length>0 ? note.map((newNote, index) => {
        return <Note key={index} id={newNote._id} title={newNote.title} text={newNote.text} delete={deleteNote} /> }) : 
        <h2 className="placeholder">No notes yet...<br></br><br></br>Press + to add a new note.</h2> }
      <AddButton note={note} addNote={addNote} />
      <Footer />
    </>
  )
}

export default App;