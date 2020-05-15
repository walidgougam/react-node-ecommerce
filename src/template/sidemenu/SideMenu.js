import React from 'react'
import './sideMenu.css'

function SideMenu () {
  return (
    <div className='container_side'>
      <h1>Shopping categories</h1>
      <ul style={{ listStyleType: 'none' }}>
        <li>pants</li>
        <li>shirts</li>
      </ul>
    </div>
  )
}

export default SideMenu
