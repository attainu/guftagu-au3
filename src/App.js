import React from 'react';
import Signup from './Signup';
import Home from './Home';
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Signup}></Route>
        <Route path='/home' component={Home}></Route>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

