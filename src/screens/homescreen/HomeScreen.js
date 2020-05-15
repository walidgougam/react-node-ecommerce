import React,{useEffect, useState} from 'react'
import Navbar from '../../template/navbar/Navbar'
import Card from '../../template/card/Card'
import {getProduct} from "../../API"

function HomeScreen () {
  const [product,setProduct] = useState(); 
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    let mounted = true; 
     getProduct()
    .then(res=>{
      if(mounted){
        setProduct(res.data)
        setIsLoading(false)
      }
    })
    .catch(err=>console.log(err))

    return ()=>{
      mounted=false
    }

 
  },[])

  return (isLoading?<div></div>:
    <div>
    {console.log(product,"product sttae")}
      <Navbar />
      {product.map((e, index) => {
        return (
          <Card
            image={e.image}
            name={e.name}
            brand={e.brand}
            price={e.price}
            review={e.numReviews}
            index={index}
          />
        )
      })}
    </div>
  )
}

export default HomeScreen
