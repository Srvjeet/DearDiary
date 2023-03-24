import React from 'react'
import ScheduleDisplay from './ScheduleDisplay';
import ScheduleForm from './ScheduleForm';
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase-config';

const Schedule = () => {
  const [notes, setNotes] = useState([])
  const [addNote, setAddNote] = useState({ title: ""})
  const [id, setId] = useState("")

  const noteRef = collection(db, "schedule")

  useEffect(() => {
    const getNotes = async () => {
      const data = await getDocs(noteRef)
      // console.log(data);
      setNotes(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })))
    }
    getNotes()
  }, [noteRef])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddNote({ ...addNote, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(addNote);
    await addDoc(noteRef, addNote)
  }

  const deleteNote = async (id) => {
    // console.log(id);
    const deletenote = doc(noteRef, id)
    await deleteDoc(deletenote)
  }

  const updateNote = async (note) => {
    // console.log(note);
    setAddNote({title: note.title})
    setId(note.id)
  }

  const updatedNote = async (id) =>{
    console.log(id);
    const updatenote = doc(db, "schedule", id)
    await updateDoc(updatenote, addNote)
  }

  return (
    <div className="container">

      <form method='post' onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Plan your day here..." onChange={handleChange} value={addNote.title} required/>
        <div style={{ "display": "flex" }}>
          <button type='submit'>Add</button>
        </div>
      </form>

      <div className='note-container'>
        {notes && notes.map((note) => (
          <ScheduleDisplay title={note.title} content={note.content} id={note.id} getId={deleteNote} getUpdateNoteId={updateNote} />
        ))}
      </div>
    </div>
  )
}

export default Schedule;