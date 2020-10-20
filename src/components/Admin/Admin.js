import React from 'react';
import AdminNav from './AdminNav/AdminNav';
import AdminServices from './AdminServices/AdminServices';

const Admin = () => {
    return (
        <section className="row container">
            <div className="col-md-4">
                <AdminNav></AdminNav>
            </div>
            <div className="col-md-8">
                <h1>Admin Service list</h1>
                <AdminServices></AdminServices>
            </div>
        </section>
    );
};

export default Admin;