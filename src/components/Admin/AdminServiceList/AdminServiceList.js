import React from 'react';
import { Card } from 'react-bootstrap';
import './AdminServicesList.css';

const AdminServiceList = (props) => {
    const {serviceName, img, description, email, name} = props.slists;
    return (
        // <div className="col-md-4 d-flex text-center service-container">
            <tbody>
                <tr>
                {/* <th scope="row">1</th> */}
                <td>{name}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>{description}</td>
                <td><img src={img} height="74px" width="74px" alt=""/></td>
                </tr>
            </tbody>
        // </div>
    );
};

export default AdminServiceList;