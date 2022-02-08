import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import signUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authActions";
import history from "./history/history";
import { useCookies } from "react-cookie";

function App({ firebaseAuthListener }) {
  // const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  // useEffect(() => {
  //   // TODO
  //   // HOW TO SET COOKIE
  //   // setCookie("user", "token" ,{ path: "/" });

  //   // HOW TO REMOVE COOKIE
  //   // removeCookie("user");

  //   if (user) {
  //     history.push("/");
  //   } else {
  //     history.push("/login");
  //   }
  // }, []);

  useEffect(() => {
    firebaseAuthListener();
  }, [firebaseAuthListener]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={signUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/landing" component={LandingPage} />
      </Switch>
    </div>
  );
}

var actions = {
  firebaseAuthListener,
};

export default connect(null, actions)(App);
