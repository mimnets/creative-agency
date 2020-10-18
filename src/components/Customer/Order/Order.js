import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerHome from '../CustomerHome/CustomerHome';
import CustomerNav from '../CustomerNav/CustomerNav';
import './Order.css'

const Order = () => {
    const {orderId} = useParams();
    const [service, setService] = useState([]);
    const {name, _id} = service.find(element => element._id.toSting() === _id.toSting());
    useEffect(() => {
        fetch(`http://localhost:5000/services/${orderId}`)
        .then(res => res.json())
        .then(data =>{
            setService(data);
        })
    },[])
    
    return (
        <section>
            <div className="row">
            <div className="col-md-2">
            <CustomerNav></CustomerNav>
                </div>
                <div className="col-md-10 my-2 ty-2">
                    
                    <h3>Order Details</h3>
                    <div className="order">
                    <form>
                    <div>
                    <input type="text" class="form-control" placeholder="Your name / company's name"/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" class="form-control" placeholder="Your email address"/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" class="form-control" placeholder={name}/>
                    </div>
                    <br/>
                    <div>
                    <input type="text" class="form-control" placeholder="Price" style={{width:'100px'}}/>
                    <input type="text" class="form-control" placeholder="Upload" style={{width:'100px'}}/>
                    
                    </div>
                    <br/>
                    <button className="btn btn-ca btn-md"><span style={{color:'white'}}>Send</span></button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;