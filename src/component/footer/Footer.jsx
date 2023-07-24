import React from 'react';
import logo from "../../img/elogo.png";
import  "./footer.css";

const Footer = () => {
    return (
        <>
        <footer>
            <div className="container text-center top">
                <div className="img">
                    <img src={logo} alt={logo} />
                </div>
                <p style={{marginTop:"30px"}}>&copy; Copyright 2023. Web Front-end developer portfolio-- by EunBee</p>
            </div>   
        </footer>
        </>
    );
};

export default Footer;