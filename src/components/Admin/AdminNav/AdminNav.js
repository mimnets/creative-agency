import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
const AdminNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <a className="navbar-brand" href="/"><img src={logo} alt="" style={{height:'30px'}}/></a>
            <h6>{loggedInUser.name}</h6>
            <nav className="nav flex-column">
            <a className="nav-link active" href="/admin">Service List</a>
            <a className="nav-link" href="/addService">+ Add Service</a>
            <a className="nav-link" href="/new">Make Admin</a>
            </nav>
        </div>
    );
};

export default AdminNav;