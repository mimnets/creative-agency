import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

const ServiceList = (props) => {
    const {name, description, img, _id} = props.slist;
    const history = useHistory();
    const {orderId} = useParams();
    const handleOrder = (orderId) => {
        history.push(`/customer/order/${orderId}`)
        console.log(orderId);
    }
    return (
        <div className="col-md-4 d-flex text-center" onClick={() => {handleOrder(_id)}}>
            <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceList;