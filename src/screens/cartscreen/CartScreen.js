import React, { useEffect, useState } from 'react'
import './cartScreen.css'
import CardShoppingCart from '../../component/CardShoppingCart'
import { getProduct, getProductDetails } from '../../API'

function CartScreen (props) {
  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(true)

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

  return isLoading ? (
    <div></div>
  ) : (
    <div className='container_cart'>
      <div className='wrapper_left'>
        <div className='wrapper_top_title'>
          <p>shopping cart</p>
          <p>price</p>
        </div>
        <CardShoppingCart image={product.image} />
      </div>
      <div className='wrapper_right'>
        <span>Subtotal (1 items): 90$</span>
        <button className='btn_checkout'>proceed to checkout</button>
      </div>
    </div>
  )
}

export default CartScreen
