import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const ServiceList = (props) => {
    const {serviceName, description, img, _id} = props.slist;
    const history = useHistory();

    const handleOrder = (orderId) => {
        history.push(`/customer/order/${orderId}`)

    }
    return (
        <div className="col-md-4 d-flex text-center" onClick={() => {handleOrder(_id)}}>
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

export default ServiceList;