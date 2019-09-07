import React from 'react';
import './App.css';
import LoginContainer from "./container/Login/Login";
import SignUpContainer from "./container/SignUp/SignUp";
import ProfileComponent from "./container/Profile/Profile";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/signup" component={SignUpContainer}/>
            <Route path="/profile" component={ProfileComponent}/>
          </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
