import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import './Navbar.css'
const Navbar = () => {
    return (
        <section className="container">
            <div>
        <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
        <a className="navbar-brand" href="/"><img src={logo} alt="" style={{height:'30px'}}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <a className="nav-link mx-3" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link mx-3" href="#">About</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mx-3" href="#">Service</a>
            </li>
            <li className="nav-item">
                <a className="nav-link mx-3" href="#">Contact</a>
            </li>
            </ul>
            <button className="btn btn-nbar my-2 my-sm-0 " type="submit"><span style={{color:'white'}}><Link to="/login">Login</Link></span></button>
        </div>
        </nav>
        </div>
        </section>
    );
};

export default Navbar;