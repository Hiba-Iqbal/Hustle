import React, { useRef, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import signUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./Home";
import LandingPage from "./LandingPage";
import { connect } from "react-redux";
import { firebaseAuthListener } from "./Redux/auth/authActions";
import history from "./history/history";
import { useCookies } from "react-cookie";
import LandingMain from "./views/LandingMain";
import ScrollReveal from "./utils/ScrollReveal";
import AppRoute from "./utils/AppRoute";
import LayoutDefault from "./layouts/LayoutDefault";
import ViewHome from "./views/Home";

function App({ firebaseAuthListener }) {
  const childRef = useRef();

  useEffect(() => {
    firebaseAuthListener();
  }, [firebaseAuthListener]);

  return (
    // <div className="App">
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/signup" component={signUp} />
    //     <Route exact path="/login" component={Login} />
    //     <Route exact path="/landing" component={LandingMain} />
    //   </Switch>
    // </div>
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} />
          <AppRoute exact path="/signup" component={signUp} />
          <AppRoute exact path="/login" component={Login} />
          {/* <AppRoute exact path="/landing" component={LandingMain} /> */}
          <AppRoute
            exact
            path="/landing"
            component={ViewHome}
            layout={LayoutDefault}
          />
        </Switch>
      )}
    />
  );
}

var actions = {
  firebaseAuthListener,
};

export default connect(null, actions)(App);
