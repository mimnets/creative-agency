import React, { createContext, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import ServiceList from './components/Home/OurService/ServiceList/ServiceList';
import Login from './components/Login/Login';
import Customer from './components/Customer/Customer/Customer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CustomerServices from './components/Customer/CustomerServices/CustomerServices';
import Review from './components/Customer/Review/Review';
import Admin from './components/Admin/Admin';
import AdminServices from './components/Admin/AdminServices/AdminServices';

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
      <PrivateRoute path="/customer/order/:orderId">
      <Customer></Customer>
      </PrivateRoute>
      <PrivateRoute path="/customer/service">
      <CustomerServices></CustomerServices>
      </PrivateRoute>
      <PrivateRoute path="/customer/review">
      <Review></Review>
      </PrivateRoute>
      <PrivateRoute path="/admin">
      <Admin></Admin>
      </PrivateRoute>
      <PrivateRoute path="/admin/addService">
      <AdminServices></AdminServices>
      </PrivateRoute>
      <Route path="/">
      <Home></Home>
      </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
