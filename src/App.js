import React from 'react';
import Signup from './Signup';
import Home from './Home';
import Login from './login';
import './App.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import reducer from './reducer/reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route exact path='/' component={Signup}></Route>
          <Route path='/home' component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          {/* <Route path='/policy' component={Policy}></Route> */}
        </BrowserRouter>
      
      </div>
    </Provider>
  );
}

export default App;

