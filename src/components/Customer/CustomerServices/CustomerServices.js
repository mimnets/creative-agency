import React, { useEffect, useState } from 'react';
import CustomerNav from '../CustomerNav/CustomerNav';
import CustomerServiceList from '../CustomerServiceList/CustomerServiceList';

const CustomerServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://pacific-bayou-45893.herokuapp.com/service")
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <CustomerNav></CustomerNav>
                </div>
                <div className="col-md-10 my-2 ty-2">

                    {
                        services.map(sl => <CustomerServiceList slists={sl} key={sl._id}></CustomerServiceList>)
                    }
                </div>
            </div>
        </section>


    );
};

export default CustomerServices;