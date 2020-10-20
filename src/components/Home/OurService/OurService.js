import React, { useState } from 'react';
import ServiceList from './ServiceList/ServiceList';
import './OurService.css'
import { useEffect } from 'react';

const OurService = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://pacific-bayou-45893.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>{
            setService(data);
        })
    },[])

    return (
        <section className="my-5 py-5">
        <div className="container service-container">
            <div className="mt-5">
                <h1 style={{textAlign: 'center'}}>Provide awesome <span style={{ color:'green'}}>services</span></h1>
            </div>
            <div className="row mt-5">
                {
                    service.map(sl => <ServiceList slist={sl} key={sl._id}></ServiceList>)
                }
            </div>
        </div>
        </section>
    );
};

export default OurService;