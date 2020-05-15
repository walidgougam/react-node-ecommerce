import React from 'react'
import './card.css'
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'

function Card ({ image, name, brand, price, review, index }) {
  return (
    <div className='containerCard'>
      <img src={image} alt='card of pants and shirt' className='image' />
      <p><Link to={`/product/${index}`}>{name}</Link></p>
      <p>{brand}</p>
      <p>{price}</p>
      <p>{review}</p>
    </div>
  )
}

export default Card
