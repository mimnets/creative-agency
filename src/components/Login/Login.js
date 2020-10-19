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
            <div className="row justify-content-center my-5 ty-5">
        <div className="col-sm-6">
            <div className="card">
            <div className="card-body">
                <p className="card-text">Login</p>
                <a onClick={googleSignIn} className="btn btn-login" >Continue with Google</a>
                <br/>
                <button className="btn btn-login">Don't have an account? <a href="" onClick={googleSignIn}>Create an account</a></button>
            </div>
            </div>
        </div>
        </div>
        </section>
        
    );
};

export default Login;