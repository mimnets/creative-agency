import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';

const CustomerNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <a className="navbar-brand" href="/"><img src={logo} alt="" style={{height:'30px'}}/></a>
            <h6>{loggedInUser.name}</h6>
            <nav className="nav flex-column">
            <a className="nav-link active" href="/customer/order/:orderId">Order</a>
            <a className="nav-link" href="/customer/service">Service List</a>
            <a className="nav-link" href="/customer/review">Review</a>
            </nav>
        </div>
    );
};

export default CustomerNav;