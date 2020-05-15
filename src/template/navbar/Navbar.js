import React, { useState } from 'react'
import './navbar.css'
import burger from '../../assets/icon/burger_menu.svg'
import SideMenu from '../sidemenu/SideMenu'
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'



function Navbar () {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <div className='container_navbar'>
      <div className='right_side'>
        <img
          src={burger}
          alt='icon burger'
          className='icon_burger'
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />
        <p style={{ marginLeft: '30px' }}><Link to="/">AMAZONA</Link></p>
      </div>
      <div className='right_side'>
        <p><Link to="/cart">cart</Link></p>
        <p>sign-in</p>
      </div>
      {menuIsOpen && <SideMenu />}
    </div>
  )
}

export default Navbar
