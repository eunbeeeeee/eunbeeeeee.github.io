import React, { useState } from 'react';
import "./header.css";
import logo from "../../img/elogo.png";
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
const Header = () => {

    const [mobile, setMobile] = useState(false);
    return (
        <header className="header">
            <div className="container d-flex">
                <div className="logo">
                    <img src={logo} alt="포트폴리오" />       
                </div>
                <div className="navlink">
                    <ul className={ mobile ? "nav-link-mobile" : "link f-flex uppercase"} onClick={()=>setMobile(false)}>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">portfolio</a></li>
                        <li><a href="#contact">contact me</a></li>
                    </ul>
                </div>

                <button className="toggle" onClick={()=> setMobile(!mobile)}>
                   {mobile ? <RxCross1 className="close home-btn" /> : <RxHamburgerMenu className="open" />}
                </button>

           </div> 
        </header>
    );
};

export default Header;