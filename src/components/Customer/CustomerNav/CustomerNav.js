import React from 'react';
import logo from '../../../images/logos/logo.png';

const CustomerNav = () => {
    return (
        <div>
            <a className="navbar-brand" href="/"><img src={logo} alt="" style={{height:'30px'}}/></a>
            <nav className="nav flex-column">
            <a className="nav-link active" href="/customer/order/:orderId">Order</a>
            <a className="nav-link" href="/customer/service">Service List</a>
            <a className="nav-link" href="/customer/review">Review</a>
            </nav>
        </div>
    );
};

export default CustomerNav;