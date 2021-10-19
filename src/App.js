import React, { Component } from 'react'
import Filmy from './Filmy'
import HomeNavbar from './HomeNavbar'
import { Switch,Route } from 'react-router-dom'
import Home from './Home'
import Serials from './Serials'
import People from './People'
import Genres from './Genres'
import Janry from './janry'
export default class App extends Component {
  render() {
    return (
      <>
      <HomeNavbar/>
      <div className="container w-75">
       <Switch> 
         <Route path="/genres" component={Genres}/>
       <Route path="/poeple" component={People}/>
         <Route path="/serials" component={Serials}/>
         <Route path="/film" component={Filmy}/>
         <Route path="/" component={Home}/>
         </Switch> 
         </div>
         <div className="container w-25">
           <Janry/>
         </div>
      </>
    )
  }
}
