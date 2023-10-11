
import React from 'react'
import {Switch,Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Openaddressing from "./components/Openaddressing"
import Card1 from "./components/Card1"
import Linearprobbing from "./components/Linearprobbing"
import Quadraticprobbing from "./components/Quadraticprobbing"
import Doublehashing from './components/Doublehashing';
import Separatechaining from './components/Separatechaining';
import Buckethashing from './components/Buckethashing';
import Wagh from './components/Wagh';
import './App.css';
import Bstabs from './components/Bstabs';

// const mongoose = require('mongoose');

// const DB = 'mongodb+srv://sahil:<password>@hashingcluster.1vo3vj5.mongodb.net/HashingCluster?retryWrites=true&w=majority';

// mongoose.connect(DB).then(() => {
//   console.log("Connection is Successful");
// }).catch((error) => console.log("Connection is Unsuccessful"));


const App = () => {
  return (
    <>
      
      <Navbar/>
      <Switch>
      <Route exact path="/"  >
      <Home/>
      </Route>
      <Route path="/services"  >
       <Services/>
      </Route>
      <Route path="/contact" >
      <Contact/>
      </Route>
      <Route path="/login" >
      <Login/>
      </Route>
      <Route path="/signup" >
      <Signup/>
      </Route> 
      <Route path="/card1" >
      <Card1/>
      </Route> 
      <Route path="/openaddressing" >
        <Openaddressing/>
      </Route> 
      <Route path="/linearprobbing" >
        <Linearprobbing/>
      </Route> 
      <Route path="/quadraticprobbing" >
        <Quadraticprobbing/>
      </Route> 
      <Route path="/doublehashing" >
        <Doublehashing/>
      </Route> 
      <Route path="/separatechaining" >
        <Separatechaining/>
      </Route> 
      <Route path="/buckethashing" >
        <Buckethashing/>
      </Route> 
      <Route path="/wagh" >
        <Wagh/>
      </Route> 
      <Route path="/bstabs" >
        <Bstabs/>
      </Route> 

      
      </Switch>

      
    
    
    </>
  )
}

export default App
