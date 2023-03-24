import React, {useState} from 'react'

const ScheduleForm = (props) => {
  const [note, setNote] = useState({title: ""})

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({...note, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(note);
    props.onCreate(note)
    setNote({title: ""})
  }

  return (
    <form method='post' onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Plan your day here!" onChange={handleChange} value={note.title} />
      <button type='submit'>Add</button>
    </form>
  )
}

export default ScheduleForm;