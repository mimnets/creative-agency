import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Order.css'

const Order = () => {
    const [loggedInUser, setLoggendInUser] = useContext(UserContext);
    const [details, setDetails] = useState([]);
    const handleChange = () =>{
        const price = document.getElementById('price').value;
        setDetails({price});
        }

    const [service, setService] = useState([]);

    const {orderId} = useParams();
    useEffect(() => {
        fetch(`https://pacific-bayou-45893.herokuapp.com/services/${orderId}`)
        .then(res => res.json())
        .then(data =>{
            setService(data);
        })
    })

    const handleOrder = () => {
        const addOrder = {...loggedInUser, ...service, ...details};
        fetch("https://pacific-bayou-45893.herokuapp.com/addOrder", {
            method: "POST",
            headers:{
                'content-Type': 'application/json',
                'Accept': 'application/json'
             },
            body: JSON.stringify(addOrder)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <section>
                <div className="my-2 ty-2">
                    <h4>Order</h4>
                    <div className="order">
                    <form noValidate autoComplete="off">
                    <div>
                    <input type="text" className="form-control" placeholder={loggedInUser.name}/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" className="form-control" placeholder={loggedInUser.email}/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" className="form-control" placeholder={service.serviceName}/>
                    </div>
                    <br/>
                    <div>
                    <input name="price" id="price" className="form-control" onChange={handleChange} placeholder="Price" value={details.price} style={{width:'100px'}}/>
                    <input type="text" className="form-control" placeholder="Upload" style={{width:'100px'}}/>
                    
                    </div>
                    <br/>
                    </form>
                    <button className="btn btn-ca btn-md" onClick={handleOrder}><span style={{color:'white'}}>Send</span></button>
                    </div>
                </div>
        </section>
    );
};

export default Order;