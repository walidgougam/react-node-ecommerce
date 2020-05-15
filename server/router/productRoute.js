const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const data = require("../Data")

dotenv.config({
  path: './config/config.env'
})

router.get("/api/product",(req,res)=>{
  res.status(200).json(data.products)
})

router.get("/api/product/:id", (req,res)=>{
  const productID = req.params.id; 
  let product = data.products.find(e=>e.id===productID)
  if(product){
    res.status(200).json(product)
  }
  else{
    res.status(500).json({message:"error api/product/:id"})
  }
})


module.exports = router
