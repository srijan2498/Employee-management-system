import React from 'react'
import './style.css'

const Navbar = ({ openModelContainer }) => {
  return (
    <div className='navbar'>
      <h2>Employee Management</h2>
          <button className="addEmployee" onClick={openModelContainer}>Add Employee</button>
    </div>
  )
}

export default Navbar
