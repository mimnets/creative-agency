import React, { useEffect, useState } from 'react';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import AdminNav from '../AdminNav/AdminNav';

const AdminServices = () => {
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
                <div className="col-md-10 my-2 ty-2">
                <table className="table">
            <thead>
                <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Service</th>
                <th scope="col">Project Details</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
                    {
                        services.map(sl => <AdminServiceList slists={sl} key={sl._id}></AdminServiceList>)
                    }
            </table>
                    
                </div>
            </div>
        </section>


    );
};

export default AdminServices;