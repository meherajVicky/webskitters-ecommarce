import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/login/Login';
import Signup from './components/sign-up/Signup';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/" component={Home}/>
    </Switch>

    </div>
  );
}

export default App;
