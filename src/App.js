import React, { useEffect } from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import { auth } from './firebase';
import {useStateValue} from './StateProvider'
import Payment from './Components/Payment/Payment';
import Orders from './Components/Orders/Orders';

function App() {

  const [{}, dispatch] = useStateValue();

  

  useEffect( ()=>{
    console.log(process.env.REACT_APP_EXAMPLE)
    
    auth.onAuthStateChanged( (authUser) =>{


      if(authUser){ //The user is loged
        
        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      }
      else{ //The user is log out

        dispatch({
          type: "SET_USER",
          user: null,
        });

      }

    })

  },[])

  return (
    <div className="App">
      <Router>
      
        <Switch>

          <Route path="/" exact>          
            <Header />
            <Home/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>

          <Route path="/payment">
            <Header/>
            <Payment/>
          </Route>

          <Route path="/orders">
            <Header/>
            <Orders/>
          </Route>

          
          
        </Switch>

      </Router>
    </div>
  );
}

export default App;
