import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import SignUp from './components/sign-up';
import SignIn from './components/sign-in'

function App() {
  return (
    
  <HashRouter>
    <div className="App">

         <Switch>
          <Route path='/sign-up' component={ SignUp } exact/>
          <Route path='/sign-in' component={ SignIn } exact/>
        </Switch>
   
    </div>
  </HashRouter>
  
  );
}

export default App;
