import React, { useEffect, useState } from 'react';
import Clients from '../Clients/Clients';

const ClientsFeedback = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://pacific-bayou-45893.herokuapp.com/reviews")
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
    },[])
    return (
       <section className="my-5 py-5">
           <div className="container">
           <div className="mt-5">
           <h1 style={{textAlign: 'center'}}>Clients <span style={{ color:'green'}}>Feedback</span></h1>
           </div>
           <div className="row mt-5">
           {
               reviews.map(cl => <Clients reviews={cl} key={cl._id}></Clients>)
           }
           </div>
           </div>
       </section>
    );
};

export default ClientsFeedback;