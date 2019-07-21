import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <div className="header">
      <div className="content">
        <div className="logo">
          <Link to="/" title="Go home" ><img src='/logo.png' alt="Logo" /></Link>
        </div>
        <div className="links">
          <Link title="Faqs" to="/faqs">Faqs</Link>
          <Link title="Log In" to="/login">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Header
