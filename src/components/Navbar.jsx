import React from 'react'
export default function Navbar() {
    let navBox= {
        padding: '10px',
        margin:'20px',
        textAlign:'center'
    }
  return (
    <div styles={navBox}>
        &nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/">Note</a>&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="/schedule">Schedule</a>
    </div>
  )
}
