import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import CustomerNav from '../CustomerNav/CustomerNav';

const CustomerServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    return (
        <section>
            <div className="row">
            <div className="col-md-2">
            <CustomerNav></CustomerNav>
                </div>
                <div className="col-md-10 my-2 ty-2">
                    
                    <h3>Service List</h3>
                </div>
            </div>
        </section>
    );
};

export default CustomerServiceList;