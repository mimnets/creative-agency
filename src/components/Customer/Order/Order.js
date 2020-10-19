import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import CustomerHome from '../CustomerHome/CustomerHome';
import CustomerNav from '../CustomerNav/CustomerNav';
import './Order.css'

const Order = () => {
    const [loggedInUser, setLoggendInUser] = useContext(UserContext);
    // const [orderItems, setOrderItems] = useState([]); 
    const [details, setDetails] = useState({price:'80'});
    const handleChange = event =>{
        const {name,value} = event.target;
        console.log(event.name);
        console.log(event.value);
        setDetails({
            ...details,
            [name] : value
        })
    }

    const {id} = useParams();
    const [service, setService] = useState([]);
    // const {name} = service;
    console.log(service);
    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
        .then(res => res.json())
        .then(data =>{
            setService(data);
        })
    },[])

    const handleOrder = () => {
        const addOrder = {...loggedInUser, ...service, ...details};
        fetch("http://localhost:5000/addOrder", {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(addOrder)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

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
                    <input type="text" class="form-control" placeholder={loggedInUser.name}/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" class="form-control" placeholder={loggedInUser.email}/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" class="form-control" placeholder={service.serviceName}/>
                    </div>
                    <br/>
                    <div>
                    <input name="price" class="form-control" onChange={handleChange} value={details.price} style={{width:'100px'}}/>
                    <input type="text" class="form-control" placeholder="Upload" style={{width:'100px'}}/>
                    
                    </div>
                    <br/>
                    <button className="btn btn-ca btn-md" onClick={handleOrder}><span style={{color:'white'}}>Send</span></button>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;