import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';

const SubmitReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [reviews, setReviews] = useState([]);
    const handleChange = () => {
        const review= document.getElementById('review').value;
        const designation= document.getElementById('comDesignation').value;
        // console.log(review);
        setReviews({review,designation})
    }
    const handleReview = () =>{
        const addReview = {...loggedInUser, ...reviews};
        fetch("https://pacific-bayou-45893.herokuapp.com/addReview", {
            method: "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(addReview)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (

        <div>
            <div className="col-md-10 my-2 ty-2">
                    
                    <h3>Order Details</h3>
                    <div className="order">
                    <form>
                    <div>
                    <input type="text" class="form-control" placeholder={loggedInUser.name}/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" id="comDesignation" class="form-control" placeholder="Company/Designation"/>
                    </div>
                    <br/>
                    <div>
                        <input type="text" id="review" onChange={() => handleChange()}class="form-control" placeholder="Your review"/>
                    </div>
                    <br/>
                    <br/>
                    <button className="btn btn-ca btn-md" onClick={handleReview}><span style={{color:'white'}}>Send</span></button>
                    </form>
                    </div>
                </div>
        </div>
    );
};

export default SubmitReview;