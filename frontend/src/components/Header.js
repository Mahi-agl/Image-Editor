import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div><>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/photo-editor-app-icon-design-template-4422455fe13e1c4e7008958f0b058eb5_screen.jpg?ts=1577021462"
              height={40}
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Sign Up
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/editor">
                Image Editor
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  
  </div>
  )
}

export default Header