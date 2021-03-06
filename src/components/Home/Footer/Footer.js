import { Container } from '@material-ui/core';
import React from 'react';
import FooterCredits from './FooterCredits';
import './Footer.css'
import Contact from './Contact';

const Footer = () => {
    return (
        <section className="container" style={{backgroundColor:'#FBD062'}}>
            <Contact></Contact>
            <FooterCredits></FooterCredits>
        </section>
    );
};

export default Footer;