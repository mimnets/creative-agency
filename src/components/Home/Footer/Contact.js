import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <main className='row d-flex justify-content-between contact-container'>
            <div className="col-md-4">
                <h2>
                Let us handle your project, professionally.
                </h2>
                <span>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</span>
            </div>
            <div className="col-md-6">
            <form>
            <div>
                <input type="text" className="form-control" placeholder="Your email address"/>
            </div>
            <br/>
            <div>
            <input type="text" className="form-control" placeholder="Your name / company's name"/>
            </div>
            <br/>
            <div>
            <textarea type="textarea" style={{height:'200px'}} className="form-control" placeholder="Your message"/>
            <br/>
            <button className="btn btn-ca btn-md"><span style={{color:'white'}}>Send</span></button>
            </div>
            </form>
            </div>
        </main>
    );
};

export default Contact;