import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../../components/Home/Navbar/Navbar'
import './Login.css'
import { handleGoogleSignIn, initializeLoginFramework } from './LoginManager';


const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:'',
        img:''
    })

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    
let { from } = location.state || { from: {pathname: "/"} };

const googleSignIn = () =>{
    handleGoogleSignIn()
    .then(res =>{
        handleResponse(res, true);
    })
}

const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
}


    return (
        <section>
            <Navbar></Navbar>
            <div className="text-center my-5 ty-5 container">
            <div className="card">
            <div className="card-body">
                <p className="card-text">Login With</p>
                <a onClick={googleSignIn} className="btn btn-login" >Continue with Google</a>
                <br/>
                <h6>Don't have an account? <a href="" onClick={googleSignIn}>Create an account</a></h6>
            </div>
            </div>
        </div>
        </section>
        
    );
};

export default Login;