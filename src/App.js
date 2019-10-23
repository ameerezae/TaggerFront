import React from 'react';
import './App.css';
import LoginContainer from "./container/Login/Login";
import SignUpContainer from "./container/SignUp/SignUp";
import ProfileContainer from "./container/Profile/Profile";
import EditProfileContainer from "./container/EditProfile/EditProfile";
import GetOrderContainer from "./container/GetOrder/GetOrder";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={LoginContainer}/>
            <Route path="/signup" component={SignUpContainer}/>
            <Route path ="/edit" component={EditProfileContainer}/>
            <Route path ="/profile" component={ProfileContainer}/>
            <Route path ="/getorder" component={GetOrderContainer}/>
          </Switch>
        </div>
      </BrowserRouter>

  );
}

export default App;
