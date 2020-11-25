import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './hocs/Layout'
import Landing from './components/landingPage/Landing'
import Home from './components/Home'
// Categories 
import AllCategories from './components/Categories/AllCategories'
import FoodDrink from './components/Categories/FoodDrink'



function App() {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component = {Landing}></Route>
          <Layout>  
            {/* <Route exact path='/home' component = {Home}></Route> */}
            {/* Categories  */}
            <Route exact path='/allCategories' component = {AllCategories} />
            {/* <Route exact path='/category/:id' component = {}></Route> */}
            {/* <Route exact path='/highercategory/:id' component = {}></Route> */}
            {/* <Route exact path= '/restaurants' component = {FoodDrink} />
            <Route exact path='/business' component = {}></Route>
            <Route exact path='/business/:id' component = {}></Route>
             */}
          </Layout>
        </Switch>
    </Router>
  )
}

export default App;
