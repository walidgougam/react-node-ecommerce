const express = require('express')
const dotenv = require('dotenv')
const productRoute = require('./router/productRoute')
const connectDB = require('./config/db')
const cors = require('cors')

dotenv.config({
  path: './config/config.env'
})

connectDB()
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', productRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT)
