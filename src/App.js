import React from 'react';
import './App.css';
import LoginContainer from "./container/Login/Login"
import {BrowserRouter, Switch, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={LoginContainer}/>
          </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
