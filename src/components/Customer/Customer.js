import React from 'react';
import CustomerNav from './CustomerNav/CustomerNav';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Order from './Order/Order';
import CustomerHome from './CustomerHome/CustomerHome';
import CustomerServiceList from './CustomerServiceList/CustomerServiceList';
import Review from './Review/Review';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Login from '../Login/Login';

const Customer = () => {
    return (
        
        <Router>
        <Switch>
        <Route path="/login">
        <Login/>
        </Route>
        <Route path="/customer/review">
        <Review></Review>
        </Route>
        <Route path="/customer/service-list">
        <CustomerServiceList></CustomerServiceList>
        </Route>
        <PrivateRoute path="/customer/order/:id">
        <Order></Order>
        </PrivateRoute>
        </Switch>
        </Router>
        
    );
};

export default Customer;