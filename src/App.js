import React, { useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from './Login'
import { useStateValue } from './StateProvider';
import { actionTypes } from './Reducer';
import { auth } from "./firebase"
import Payment from "./Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Orders from "./Orders"


const promise = loadStripe('pk_test_51HQ3njAebxsWF5WZkulR7fEdtX9tFP93GelYGHvpGadx8WxaGSmPtEn47BltBqzyy8D2Ajx2uoshis8lsxLI6acc00Md2TlEn3');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        // user logged in
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })
      } else {
        // user logged out
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        })
      }
    })
  }, [])

  return ( 
    
    <div className = "app">
      <Router>
        
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>


          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            
          </Route>

          <Route path="/">  
            <Header />
            <Home />
          </Route>

          
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;