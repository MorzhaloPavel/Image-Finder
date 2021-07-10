import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        className="nav-link"  
        to={'/'}
        exact
      >
        <img src="https://img.icons8.com/material/48/000000/cloudshot--v2.png" alt=''/>
      </NavLink>
      <NavLink
        className="nav-link"  
        to={'/bookmarks'}
      >
        <img src="https://img.icons8.com/material/48/000000/winrar.png" alt=''/>
      </NavLink>
    </nav>
  )
}

export default Navbar
