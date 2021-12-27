import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import signUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Home from "./Home";
import { connect } from "react-redux";
import {firebaseAuthListener} from './Redux/auth/authActions'

function App ({firebaseAuthListener}) {

  useEffect(()=>{
    firebaseAuthListener()
  },[firebaseAuthListener])

  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/signup" component={signUp}/>
      <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
    )
  
};

var actions ={
  firebaseAuthListener
}

export default connect(null,actions)(App);
