import React from 'react';
import CustomerNav from '../CustomerNav/CustomerNav';
import Order from '../Order/Order';

const Customer = () => {
    return (
        
        <div className="row container">
            <div className="col-md-4">
            <CustomerNav></CustomerNav>
            </div>
            <div className="col-md-8">
                <Order></Order>
            </div>
        </div>
    );
};

export default Customer;