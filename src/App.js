import React from 'react';
import './App.css';
import LoginContainer from "./container/Login/Login";
import SignUpContainer from "./container/SignUp/SignUp";
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/signup" component={SignUpContainer} />
          </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
