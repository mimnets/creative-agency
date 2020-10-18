import React, { createContext, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Customer from './components/Customer/Customer';
import Home from './components/Home/Home/Home';
import ServiceList from './components/Home/OurService/ServiceList/ServiceList';
import Login from './components/Login/Login';

export const  UserContext = createContext(); 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route path="/login">
      <Login/>
      </Route>
      <Route path="/service/:orderId">
      <ServiceList></ServiceList>
      </Route>
      <Route path="/customer/">
      <Customer></Customer>
      </Route>
      <Route exact path="/">
      <Home></Home>
      </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
