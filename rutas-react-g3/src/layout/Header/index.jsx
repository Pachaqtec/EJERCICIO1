import React from 'react'
import { Link } from "react-router-dom";
import './style.scss'

const Header = () => {
  return (
    <div className="l_header__wrapper">
      <div className="l_header__logo">
        <img src="http://assets.stickpng.com/images/58428ba1a6515b1e0ad75ab0.png" alt="" />
      </div>
      <div className="l_header_menu">
        <Link to="/">Home</Link>
        <Link to="/hero">Hero</Link>
        <Link to="/otros">Otros</Link>
        <Link to="/hola">Hola</Link>
        <Link to="/chau">Chau</Link>
      </div>
    </div>
  )
}

export default Header
