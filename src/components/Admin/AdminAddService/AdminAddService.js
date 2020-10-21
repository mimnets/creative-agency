import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import AdminNav from '../AdminNav/AdminNav';

const AdminAddService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [addService, setAddService] = useState([]);

    const handleChange = () => {
        const serviceName = document.getElementById('serviceTitle').value;
        const description = document.getElementById('serviceDesc').value;
        const img = document.getElementById('serviceImg').value;
        setAddService({serviceName, description, img});
    }
    const handleAddService = () => {
        const addServices = {...addService};
        fetch("https://pacific-bayou-45893.herokuapp.com/addServices", {
            method: "POST",
            headers:{
                'content-Type': 'application/json',
                'Accept': 'application/json'
             },
            body: JSON.stringify(addServices)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (
                <section className="row container">
                    <div className="col-md-4">
                        <AdminNav></AdminNav>
                    </div>
                    <div className="col-md-8">
                        <h1>Admin Service list</h1>
                        <div className="order">
                    <form noValidate autoComplete="off">
                    <div>
                        <label type="text">Service Title</label>
                    <input type="text" id="serviceTitle" className="form-control" onChange={handleChange} placeholder="Service Title" value={addService.serviceName}/>
                    </div>
                    <br/>
                    <div>
                        <label type="text">Service Description</label>
                        <input type="text" id="serviceDesc" className="form-control" onChange={handleChange} placeholder="Service Description" value={addService.description}/>
                    </div>
                    <br/>
                    <div>
                    <label type="text">Service Image</label>
                        <input type="link" id="serviceImg" className="form-control" onChange={handleChange} placeholder="" value={addService.img}/>
                    </div>
                    <br/>
                    <br/>
                    </form>
                    <button className="btn btn-ca btn-md" onClick={handleAddService}><span style={{color:'white'}}>Submit</span></button>
                    </div>
                    </div>
                </section>
    );
};

export default AdminAddService;