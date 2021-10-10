import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import useFirebase from "./Hooks/useFirebase";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Payment from "./components/Payment/Payment";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/Private/PrivateRoute";
import AuthProvider from "./components/Context/AuthProvider";
import Shipping from "./components/Shipping/Shipping";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/shipping">
              <Shipping></Shipping>
            </Route>
            <Route exact path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
