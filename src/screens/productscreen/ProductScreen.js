import React, { useEffect, useState } from 'react'
import Navbar from '../../template/navbar/Navbar'
import products from '../../Data'
import './productScreen.css'
import { getProduct, getProductDetails } from '../../API'

function ProductScreen (props) {
  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [qty, setQty] = useState(1)

  useEffect(() => {
    let mounted = true
    getProductDetails(props.match.params.id)
      .then(res => {
        if (mounted) {
          let newData = res.data
          setProduct(newData)
          setIsLoading(false)
        }
      })
      .catch(err => console.log(err))

    return () => {
      mounted = false
    }
  }, [])

  const handleAddToCart = () => {
    props.history.push(`/cart/${product.id}?qty=${qty}`)
  }

  return isLoading ? (
    <div></div>
  ) : (
    <div>
      <Navbar />
      <p>
        <p style={{ cursor: 'pointer' }} onClick={() => props.history.goBack()}>
          Back to result
        </p>
      </p>
      <div className='container_product_screen'>
        <img src={product.image} alt='clothes' />
        <div className='wrapper_product_info'>
          <p>{product.name}</p>
          <p>{`${product.rating} stars (${product.numReviews} reviews)`}</p>
          <p>price : {product.price}</p>
          <p>desription:</p>
        </div>
        <div className='wrapper_add_cart'>
          <p>Price: {product.price} euros</p>
          <span>status:</span>
          <span>{product.countInStock > 0 ? 'in stock' : 'out of stock'}</span>
          <div>
            <span>qty: </span>
            <select onChange={e => setQty(e.target.value)}>
              {[...Array(product.countInStock).keys()].map((number, index) => {
                return <option key={index + 1}>{number + 1}</option>
              })}
            </select>
          </div>
          {product.countInStock > 0 ? (
            <button className='btn_add_cart' onClick={handleAddToCart}>
              add to cart
            </button>
          ) : (
            <p>out of stock</p>
          )}
        </div>
      </div>
    </div>
  )
}
export default ProductScreen
