import React from 'react';
import { Card } from 'react-bootstrap';
import './CustomerServices.css';

const CustomerServiceList = (props) => {
    const {serviceName, img, description} = props.slists;
    return (
        <div className="col-md-4 d-flex text-center service-container">
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{serviceName}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
};

export default CustomerServiceList;