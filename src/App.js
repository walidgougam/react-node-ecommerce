import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import HomeScreen from './screens/homescreen/HomeScreen'
import ProductScreen from './screens/productscreen/ProductScreen'
import CartScreen from './screens/cartscreen/CartScreen'
import { GlobalProvider } from './context/GlobalState'

function App () {
  return (
    <div>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/product/:id' component={ProductScreen} />
            <Route exact path='/cart/:id' component={CartScreen} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App
