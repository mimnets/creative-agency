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

const Customer = () => {
    return (
        
        <Router>
        <Switch>
        <Route path="/customer/review">
        <Review></Review>
        </Route>
        <Route path="/customer/service-list">
        <CustomerServiceList></CustomerServiceList>
        </Route>
        <Route path="/customer/">
        <Order></Order>
        </Route>
        </Switch>
        </Router>
        
    );
};

export default Customer;