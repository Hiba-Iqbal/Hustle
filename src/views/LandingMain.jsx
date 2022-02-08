import React, { useRef, useEffect } from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./../utils/AppRoute";
import ScrollReveal from "./../utils/ScrollReveal";

// Layouts
import LayoutDefault from "./../layouts/LayoutDefault";

// Views
import Home from "./../views/Home";

const LandingMain = () => {
  const childRef = useRef();

  useEffect(() => {
    // CDM
    console.log("CDM");
  }, []);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
        </Switch>
      )}
    />
  );
};

export default LandingMain;
