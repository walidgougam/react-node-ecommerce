import React from 'react'
import './cardShoppingCart.css'

function CardShoppingCart (props) {
  return (
    <div className='container_shopping_cart'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={props.image} className='img' />
        <div>
          <p>title</p>
          <div className='wrapper_quantity'>
            <span>qty: </span>
            <select>
              <option></option>
            </select>
            <button>delete</button>
          </div>
        </div>
      </div>

      <p>90$</p>
    </div>
  )
}

export default CardShoppingCart
