import React from 'react';
import { Card } from 'react-bootstrap';
import './AdminServicesList.css';

const AdminServiceList = (props) => {
    const {serviceName, img, description, email, name} = props.slists;
    return (
        <div className="col-md-4 d-flex text-center service-container">
            <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email Id</th>
                <th scope="col">Service</th>
                <th scope="col">Project Details</th>
                <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>{description}</td>
                <td>{serviceName}</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
};

export default AdminServiceList;