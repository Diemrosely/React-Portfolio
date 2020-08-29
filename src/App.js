import React from 'react';
import { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./pages/about";
import Contact from './pages/contact';
import Portfolio from "./pages/portfolio";

function App() {

  return (
    <Router basename= "/">
     
      <Route exact path="/" component={About}/> 
      <Route path="/Portfolio" component={Portfolio}/>
      <Route  path="/Contact" component={Contact}/>

    </Router>  
);
}

export default App;