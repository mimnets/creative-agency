import React from 'react';
import CustomerNav from '../CustomerNav/CustomerNav';
import SubmitReview from '../SubmitReview/SubmitReview';

const Review = () => {
    return (
        <section>
            <div className="row">
            <div className="col-md-2">
            <CustomerNav></CustomerNav>
                </div>
                <div className="col-md-10 my-2 ty-2">
                    
                    <SubmitReview></SubmitReview>
                </div>
            </div>
        </section>
    );
};

export default Review;