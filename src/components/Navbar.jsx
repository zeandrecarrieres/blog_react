import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="navbar">
                    <ul>
                    <li className="nav-link"><NavLink to="/" activeClassName="selected">Home</NavLink></li>
                    <li  className="nav-link"><NavLink to="/addpost">Add Post</NavLink></li>
                    <li  className="nav-link"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
              
            </div>
        </div>
    )
}

export default Navbar
