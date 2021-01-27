import React from "react";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="wrapper">  
        <Route path="/" exact component={LogIn} />
        <Route path="/login" exact component={LogIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
