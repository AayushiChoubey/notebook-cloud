import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({title, description, tag})
    });
     const json = response.json();

    console.log("Adding a new note")
    // const note = {
    //   "_id": json._id,
    //   "user": json.user,
    //   "title": title,
    //   "description": description,
    //   "tag": tag,
    //   "date": json.date,
    //   "__v": 0
    // };
    setNotes(notes.concat(json))
  }

  // Delete a Note
  const deleteNote = async(id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json"
      }
    });
    const json = response.json();
    console.log(json)

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API  Call 
    // console.log(id)
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        "auth-token": localStorage.getItem("token"),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();
    console.log(json)

     let newNotes = JSON.parse(JSON.stringify(notes))

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
       newNotes[index].title = title;
       newNotes[index].description = description;
       newNotes[index].tag = tag;
       break;
      }

    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;