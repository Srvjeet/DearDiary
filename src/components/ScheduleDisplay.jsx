import React from 'react'

const ScheduleDisplay = (props) => {

  const handleClick = (id) =>{
    props.getId(id)
  }
  return (
    <div className="note">
        <p className="title">{props.title}</p>
        <button onClick={()=>handleClick(props.id)}>Done</button>
      </div>
  )
}

export default ScheduleDisplay;