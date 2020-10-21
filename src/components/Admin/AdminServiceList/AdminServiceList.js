import React from 'react';
import { Card } from 'react-bootstrap';
import './AdminServicesList.css';

const AdminServiceList = (props) => {
    const {serviceName, img, description, email, name} = props.slists;
    return (
            <tbody>
                <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>{description}</td>
                <td><img src={img} height="74px" width="74px" alt=""/></td>
                </tr>
            </tbody>
    );
};

export default AdminServiceList;